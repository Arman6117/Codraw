import React from "react";
import { LuLoader } from "react-icons/lu";
import Info from "./info";
import Participants from "./participants";
import UndoRedo from "./undo-redo-button";
import Toolbar from "./toolbar";

const Loading = () => {
  return (
    <main className="h-screen flex  w-full relative bg-[#f9f4fa] touch-none justify-center items-center">
      <LuLoader className="h-6 w-6 animate-spin text-muted-foreground" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <UndoRedo.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};

export default Loading;
