"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Toolbar from "./toolbar";
import Info from "./info";
import Participants from "./participants";
import UndoRedo from "./undo-redo-button";
import { CanvasMode, CanvasState } from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useRedo,
  useUndo,
} from "@liveblocks/react/suspense";

interface CanvasProps {
  boardId: string;
}
const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();
  return (
    <div className="h-screen flex  w-full relative bg-[#ffffff] touch-none ">
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
    </div>
  );
};

export default Canvas;
