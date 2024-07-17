"use client";

import { LuLink2, LuPencil, LuTrash2 } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { Button } from "./ui/button";
import ConfirmModal from "./confiirm-modal";
import { useRenameModal } from "@/store/use-rename-modal";
import { cn } from "@/lib/utils";

interface ActionsProps {
  className?:string
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}
const Actions = ({className, children, id, side, sideOffset, title }: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove);
  const { onOpen } = useRenameModal();
  const copyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied successfully"))
      .catch(() => toast.error("Failed to copy link"));
  };
  const deleteBoard = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted successfully"))
      .catch(() => toast.error("Failed to delete"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        className={cn("w-60  absolute  outline-none ", className)}
        side={side}
        sideOffset={sideOffset}
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={copyLink}>
          <LuLink2 className="h-4 w-4 mr-2 " />
          Copy Board Link
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <LuPencil className="h-4 w-4 mr-2 " />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete Board"
          description="This will delete the board and all of it's content!!"
          disabled={pending}
          onConfirm={deleteBoard}
        >
          <Button
            variant={"ghost"}
            className="p-3 text-sm font-normal text-white bg-destructive w-full justify-start cursor-pointer"
          >
            <LuTrash2 className="h-4 w-4 mr-2   " />
            Delete Board
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
