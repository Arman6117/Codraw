"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { Camera, Colors } from "@/types/canvas";
import { useMutation, useSelf } from "@liveblocks/react/suspense";
import { memo } from "react";
import ColorPicker from "./color-picker";
import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";
import { LuBringToFront, LuSendToBack, LuTrash2 } from "react-icons/lu";
import { useDeleteLayer } from "@/hooks/use-delete-layer";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Colors) => void;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const setFill = useMutation(
      ({ storage }, fill: Colors) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor]
    );
    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();
        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i);
        }
      },
      [selection]
    );
    const moveToFront = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();
        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i)
          );
        }
      },
      [selection]
    );
    const deleteLayer = useDeleteLayer();
    const selectionBounds = useSelectionBounds();
    if (!selectionBounds) return null;

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(
          calc(${x}px - 50%), 
          calc(${y - 16}px - 100%)
          )`,
        }}
      >
        <ColorPicker onChange={setFill} />
        <div className="flex flex-col items-center gap-2 justify-center">
          <Hint label="Bring to front">
            <Button variant={"board"} size={"icon"} onClick={moveToFront}>
              <LuBringToFront className="h-5 w-5" />
            </Button>
          </Hint>
          <Hint label="Send to back">
            <Button variant={"board"} size={"icon"} onClick={moveToBack}>
              <LuSendToBack className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
        <div className="flex items-center pl-2 ml-2 border-1 border-neutral-300">
          <Hint label="Delete">
            <Button variant={"board"} onClick={deleteLayer} size={"icon"}>
              <LuTrash2 className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

SelectionTools.displayName = "SelectionTools";
