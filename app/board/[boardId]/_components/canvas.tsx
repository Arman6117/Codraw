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
  const info = useSelf((me) => me.info);
  console.log(info);
  return (
    <div className="h-screen flex  w-full relative bg-[#f9f4fa] touch-none ">
      <Logo />
      <Toolbar />
      <UndoRedo />
      <Participants />
      <Info />
    </div>
  );
};

export default Canvas;
