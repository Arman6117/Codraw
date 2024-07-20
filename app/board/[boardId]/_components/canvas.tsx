"use client";
import React, { useCallback, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import Logo from "./logo";
import Toolbar from "./toolbar";
import Info from "./info";
import Participants from "./participants";
import UndoRedo from "./undo-redo-button";
import {
  Camera,
  CanvasMode,
  CanvasState,
  CircleLayer,
  Colors,
  LayerType,
  NoteLayer,
  Point,
  RectangleLayer,
  Side,
  TextLayer,
  XYWH,
} from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
  useOthersMapped,
  useStorage,
} from "@liveblocks/react/suspense";
import { CursorPresence } from "./cursor-presence";
import {
  connectionIdToColor,
  pointerEventToCanvasPoint,
  resizeBounds,
} from "@/lib/utils";
import { LiveObject } from "@liveblocks/client";
import { LayerPreview } from "./layer-preview";
import { SelectionBox } from "./selection-box";

const MAX_LAYERS = 100;
interface CanvasProps {
  boardId: string;
}
const Canvas = ({ boardId }: CanvasProps) => {
  const layerIds = useStorage((root) => root.layerIds);

  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const [lastUsedColor, setLastUsedColor] = useState<Colors>({
    r: 255,
    g: 255,
    b: 255,
  });
  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();

  const insertLayer = useMutation(
    (
      { storage, setMyPresence },
      layerType:
        | LayerType.Circle
        | LayerType.Note
        | LayerType.Rectangle
        | LayerType.Text,
      position: Point
    ) => {
      const liveLayers = storage.get("layers");

      if (liveLayers.size >= MAX_LAYERS) return;

      const liveLayerIds = storage.get("layerIds");

      const layerId = nanoid();

      let layer: RectangleLayer | CircleLayer | TextLayer | NoteLayer;

      switch (layerType) {
        case LayerType.Rectangle:
          layer = {
            type: LayerType.Rectangle,
            x: position.x,
            y: position.y,
            height: 100,
            width: 100,
            fill: lastUsedColor,
          };
          break;
        case LayerType.Circle:
          layer = {
            type: LayerType.Circle,
            x: position.x,
            y: position.y,
            height: 100,
            width: 100,
            fill: lastUsedColor,
          };
          break;
        case LayerType.Text:
          layer = {
            type: LayerType.Text,
            x: position.x,
            y: position.y,
            height: 100,
            width: 100,
            fill: lastUsedColor,
          };
          break;
        case LayerType.Note:
          layer = {
            type: LayerType.Path,
            x: position.x,
            y: position.y,
            height: 100,
            width: 100,
            fill: lastUsedColor,
          };
          break;
        default:
          throw new Error("Unsupported layer type");
      }

      liveLayerIds.push(layerId);
      liveLayers.set(layerId, new LiveObject(layer));

      setMyPresence({ selection: [layerId] }, { addToHistory: true });
      setCanvasState({ mode: CanvasMode.None });
    },
    [lastUsedColor]
  );

  const resizeSelectedLayer = useMutation(
    ({ self, storage }, point: Point) => {
      if (canvasState.mode !== CanvasMode.Resizing) return;

      const bounds = resizeBounds(
        canvasState.corner,
        point,
        canvasState.initialBounds
      );

      const liveLayers = storage.get("layers");
      const layer = liveLayers.get(self.presence.selection[0]);

      if (layer) {
        layer.update(bounds);
      }
    },
    [canvasState]
  );
  const onLayerResizePointerDown = useCallback(
    (corner: Side, initialBounds: XYWH) => {
      history.pause();
      setCanvasState({ mode: CanvasMode.Resizing, initialBounds, corner });
    },
    [history]
  );
  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const current = pointerEventToCanvasPoint(camera, e);
      setMyPresence({ cursor: current });

      if (canvasState.mode === CanvasMode.Resizing) {
        resizeSelectedLayer(current);
      }
    },
    [canvasState, camera, resizeSelectedLayer]
  );

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

  const onPointerUp = useMutation(
    ({}, e) => {
      const point = pointerEventToCanvasPoint(camera, e);

      if (canvasState.mode === CanvasMode.Inserting) {
        insertLayer(canvasState.layerType, point);
      } else {
        setCanvasState({
          mode: CanvasMode.None,
        });
      }

      history.resume();
    },
    [camera, canvasState, history, insertLayer]
  );

  const selections = useOthersMapped((other) => other.presence.selection);

  const layerIdsForSelection = useMemo(() => {
    const layerIdsToColorSelection: Record<string, string> = {};

    for (const user of selections) {
      const [connectionId, selection] = user;

      for (const layerId of selection) {
        layerIdsToColorSelection[layerId] = connectionIdToColor(connectionId);
      }
    }

    return layerIdsToColorSelection;
  }, [selections]);

  const onLayerPointerDown = useMutation(
    ({ self, setMyPresence }, e: React.PointerEvent, layerId: string) => {
      if (
        canvasState.mode === CanvasMode.Inserting ||
        canvasState.mode === CanvasMode.Pencil
      ) {
        return;
      }

      history.pause();
      e.stopPropagation();

      const point = pointerEventToCanvasPoint(camera, e);

      if (!self.presence.selection.includes(layerId)) {
        setMyPresence({ selection: [layerId] }, { addToHistory: true });
      }

      setCanvasState({ mode: CanvasMode.Translating, current: point });
    },
    [setCanvasState, camera, history, canvasState.mode]
  );
  return (
    <div className="h-screen flex  w-full relative bg-neutral-100 touch-none ">
      <Logo />
      <Toolbar canvasState={canvasState} setCanvasState={setCanvasState} />
      <UndoRedo
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />
      <Participants />
      <Info boardId={boardId} />

      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerUp={onPointerUp}
      >
        <g style={{ transform: `translate(${camera.x}px, ${camera.y}px)` }}>
          {layerIds.map((layerId) => (
            <LayerPreview
              key={layerId}
              layerId={layerId}
              onLayerPointerDown={onLayerPointerDown}
              selectionColor={layerIdsForSelection[layerId]}
            />
          ))}
          <SelectionBox onResizeHandlePointerDown={onLayerResizePointerDown} />
          <CursorPresence />
        </g>
      </svg>
    </div>
  );
};

export default Canvas;
