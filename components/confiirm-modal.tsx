import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
interface ConfirmModalProps {
  children: React.ReactNode;
  header: string;
  description?: string;
  onConfirm: () => void;
  disabled?: boolean;
}

const ConfirmModal = ({
  children,
  header,
  onConfirm,
  description,
  disabled,
}: ConfirmModalProps) => {
  const handleClick = () => {
    onConfirm();
  };
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="border-none outline-none">
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-white text-black hover:bg-white shadow-none">
            Cancel
          </AlertDialogAction>
          <AlertDialogAction disabled={disabled} onClick={handleClick}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
