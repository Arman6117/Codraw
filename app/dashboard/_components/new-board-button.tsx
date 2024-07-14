"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}
const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.createBoard);
 const router = useRouter();
  const onClick = () => {
    mutate({
      orgId: orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created"); 
        router.push(`/board/${id}`)
      })
      .catch((err) => {
        throw Error(err);
      });
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "col-span-1 rounded-lg bg-pink-600 hover:bg-pink-700 aspect-[100/127] flex flex-col justify-center items-center py-6 ",
        (pending || disabled) && "opacity-75 hover:bg-pink-600 cursor-not-allowed"
      )}
    >
      <div />
      <LuPlus className="h-12 w-12 text-white stroke-1 " />
      <p className="text- text-white font-light">New Board</p>
    </button>
  );
};

export default NewBoardButton;
