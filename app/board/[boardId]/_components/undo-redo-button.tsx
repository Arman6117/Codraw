import React from "react";
import ToolButton from "./tool-button";
import { LuRedo2, LuUndo, LuUndo2 } from "react-icons/lu";

interface UndoRedoProps {
  canRedo: boolean;
  canUndo: boolean;
  undo: () => void;
  redo: () => void;
}

const UndoRedo = ({ canRedo, canUndo, redo, undo }: UndoRedoProps) => {
  return (
    <div className="absolute gap-x-2 flex justify-center items-center top-2 left-[35%] md:left-[50%] s shadow-slate-400 h-10 px4 rounded-full   bg-">
      <ToolButton
        label="Undo"
        icon={LuUndo2}
        isDisabled={!canUndo}
        onClick={() => {}}
      />

      <ToolButton
        label="Redo"
        icon={LuRedo2}
        isDisabled={!canRedo}
        onClick={() => {}}
      />
    </div>
  );
};

export default UndoRedo;

export const UndoRedoSkeleton = () => {
  return (
    <div className="absolute flex justify-center items-center top-2 left-[12%] md:left-[20%] shadow-md shadow-slate-400 h-10 px-4 rounded-full   bg-white" />
  );
};
