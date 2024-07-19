'use client'
import Hint from "@/components/hint";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

import {
  LuCircle,
  LuMousePointer2,
  LuPenTool,
  LuPencil,
  LuRectangleHorizontal,
  LuStickyNote,
  LuType,
} from "react-icons/lu";

import ToolButton from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { useRef, useState } from "react";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
}
const Toolbar = ({ canvasState, setCanvasState }: ToolbarProps) => {
  const [open, setOpen] = useState(false);



  return (
    <DropdownMenu >
      <Hint label="Toolbar" side="bottom" sideOffset={10}>
        <DropdownMenuTrigger asChild>
          <div className="absolute flex justify-center items-center left-[60%] top-2 md:left-[40%] shadow-md shadow-slate-400 h-10 px-4 rounded-full border-2 border-pink-600  bg-white">
            <LuPenTool className="h-5 w-5 text-gray cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
      </Hint>
      <DropdownMenuContent className="mt-3 md:min-w-[8rem] md:px-2  min-w-1 pr-2  py-2 flex space-x-3 shadow-md shadow-slate-400  rounded-full  ">
        <DropdownMenuArrow className="relative -top-3  " />
        <div className="flex md:flex-row flex-col justify-center items-center">
          <DropdownMenuItem  onSelect={(e)=> e.preventDefault()}  className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuMousePointer2}
              label="Select"
              onClick={() =>
                setCanvasState({
                  mode: CanvasMode.None,
                })
              }
              isActive={
                canvasState.mode === CanvasMode.None ||
                canvasState.mode === CanvasMode.Pressing ||
                canvasState.mode === CanvasMode.Resizing ||
                canvasState.mode === CanvasMode.SelectionNet ||
                canvasState.mode === CanvasMode.Translating
              }
            />
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={(e)=> e.preventDefault()} className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuType}
              label="Text"
              onClick={() =>
                setCanvasState({
                  mode: CanvasMode.Inserting,
                  layerType: LayerType.Text,
                })
              }
              isActive={
                canvasState.mode === CanvasMode.Inserting &&
                canvasState.layerType === LayerType.Text
              }
            />
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e)=> e.preventDefault()}  className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuStickyNote}
              label="Sticky Note"
              onClick={() =>
                setCanvasState({
                  mode: CanvasMode.Inserting,
                  layerType: LayerType.Note,
                })
              }
              isActive={
                canvasState.mode === CanvasMode.Inserting &&
                canvasState.layerType === LayerType.Note
              }
            />
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e)=> e.preventDefault()}  className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuRectangleHorizontal}
              label="Rectangle"
              onClick={() =>
                setCanvasState({
                  mode: CanvasMode.Inserting,
                  layerType: LayerType.Rectangle,
                })
              }
              isActive={
                canvasState.mode === CanvasMode.Inserting &&
                canvasState.layerType === LayerType.Rectangle
              }
            />
          </DropdownMenuItem>
          <DropdownMenuItem   onSelect={(e)=> e.preventDefault()}  className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuCircle}
              label="Circle"
              onClick={() =>
                setCanvasState({
                  mode: CanvasMode.Inserting,
                  layerType: LayerType.Circle,
                })
              }
              isActive={
                canvasState.mode === CanvasMode.Inserting &&
                canvasState.layerType === LayerType.Circle
              }
            />
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e)=> e.preventDefault()}  className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuPencil}
              label="Pen"
              onClick={() =>
                setCanvasState({
                  mode: CanvasMode.Pencil,
                })
              }
              isActive={canvasState.mode === CanvasMode.Pencil}
            />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Toolbar;

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute flex justify-center items-center top-2 md:left-[13%] shadow-md shadow-slate-400 h-10 px-4 rounded-full bg-white" />
  );
};
