"use client";
import { FormEventHandler, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";

import { useRenameModal } from "@/store/use-rename-modal";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  const { mutate, pending } = useApiMutation(api.board.update);
  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast.success("Board renamed successfully");
        onClose();
      })
      .catch(() => toast.error("Failed to rename board"));
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename this board</DialogTitle>
          <DialogDescription>Enter a new title to rename</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            placeholder="Board title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            maxLength={60}
          />
          <DialogFooter>
            <Button
              type="button"
              variant={"outline"}
              className="hover:bg-destructive hover:text-white"
            >
              <DialogClose>Cancel</DialogClose>
            </Button>
            <Button disabled={pending} type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
