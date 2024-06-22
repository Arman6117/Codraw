"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button>
            <PlusIcon className="text-white" />
          </button>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};

export default NewButton;
