"use client";
import React from "react";
import Logo from "./logo";
import Toolbar from "./toolbar";
import Info from "./info";
import Participants from "./participants";
import UndoRedo from "./undo-redo-button";
import { useSelf } from "@liveblocks/react/suspense";

interface CanvasProps {
  boardId: string;
}
const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <div className="h-screen flex  w-full relative bg-[#f9f4fa] touch-none ">
      <Logo />
      <Toolbar />
      <UndoRedo />
      <Participants />
      <Info boardId={boardId} />
    </div>
  );
};

export default Canvas;
