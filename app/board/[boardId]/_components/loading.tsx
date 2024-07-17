import React from "react";
import { LuLoader } from "react-icons/lu";
import { InfoSkeleton } from "./info";
import { ParticipantsSKeleton } from "./participants";
import { UndoRedoSkeleton } from "./undo-redo-button";
import { ToolbarSkeleton } from "./toolbar";

const Loading = () => {
  return (
    <main className="h-screen flex  w-full relative bg-[#f9f4fa] touch-none justify-center items-center">
      <LuLoader className="h-6 w-6 animate-spin text-muted-foreground" />
      <InfoSkeleton />
      <ParticipantsSKeleton />
      <UndoRedoSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};

export default Loading;
