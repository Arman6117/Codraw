import Hint from "@/components/hint";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { FaToolbox, FaTools } from "react-icons/fa";
import {
  LuCircle,
  LuCircleEllipsis,
  LuMousePointer2,
  LuPenTool,
  LuPencil,
  LuRectangleHorizontal,
  LuStickyNote,
  LuType,
} from "react-icons/lu";
import { MdPanTool } from "react-icons/md";
import ToolButton from "./tool-button";

const Toolbar = () => {
  return (
    <DropdownMenu>
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
          <DropdownMenuItem className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuMousePointer2}
              label="Select"
              onClick={() => {}}
              isActive={true}
            />
          </DropdownMenuItem>

          <DropdownMenuItem className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuType}
              label="Text"
              onClick={() => {}}
              isActive={false}
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuStickyNote}
              label="Sticky Note"
              onClick={() => {}}
              isActive={false}
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuRectangleHorizontal}
              label="Rectangle"
              onClick={() => {}}
              isActive={false}
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuCircle}
              label="Circle"
              onClick={() => {}}
              isActive={false}
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-full focus:bg-white">
            <ToolButton
              icon={LuPencil}
              label="Pen"
              onClick={() => {}}
              isActive={false}
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
