"use client";
import Hint from "@/components/hint";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import React from "react";
import { LuMenu } from "react-icons/lu";
import { cn } from "@/lib/utils";
import Actions from "@/components/actions";

interface InfoProps {
  boardId: string;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
});
function TabSeparator() {
  return <div className="text-neutral-300 px-1.5">|</div>;
}
const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });
  const { onOpen } = useRenameModal();

  if (!data) return <InfoSkeleton />;
  return (
    <div className="absolute md:left-2  flex items-center top-2 shadow-md shadow-slate-400  h-10   rounded-md   bg-white">
      <Hint label="Rename" side="bottom" sideOffset={10}>
        <Button
          variant={"ghost"}
          className="w-full"
          onClick={() => onOpen(boardId, data.title)}
        >
          <span className={cn("font-medium", poppins.className)}>
            {data.title}
          </span>
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={boardId} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Menu" side="bottom" sideOffset={10}>
            <Button variant={"ghost"} className="w-full">
              <LuMenu className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export default Info;

export const InfoSkeleton = () => {
  return (
    <div className="absolute right-2 flex justify-center items-center top-2 shadow-md shadow-slate-400 h-10  rounded-md  w-28  bg-white" />
  );
};
