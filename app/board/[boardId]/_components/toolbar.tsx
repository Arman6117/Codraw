import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { LuPencil } from "react-icons/lu";

const Toolbar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="absolute flex justify-center items-center left-[60%] top-2 md:left-[40%] shadow-md shadow-slate-400 h-10 px-4 rounded-full border-2 border-pink-600  bg-white">
          <LuPencil className="h-5 w-5 text-gray cursor-pointer" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 px-2 py-2 flex space-x-3 shadow-md shadow-slate-400  rounded-full  ">
        <DropdownMenuArrow className="relative -top-3  " />
        <div className="flex flex-col items-center justify-center">
          <DropdownMenuItem className="rounded-full border-2 border-pink-200 group  hover:border-pink-600 ">
            <div className="flex flex-col space-y-2  ">
              <div className="">
                <LuPencil className="h-5 w-5" />
              </div>
            </div>
          </DropdownMenuItem>
        </div>
        <DropdownMenuItem>
          <div>Square</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div>Circle</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div>Arrow</div>
        </DropdownMenuItem>
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
