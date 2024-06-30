"use client";

import Hint from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";

const NewButton = () => {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Hint label="Create organization" side="right" align="start" sideOffset={18}>
          <div className="aspect-square">
            <button className="bg-white/25 w-full rounded-md hover:opacity-100 opacity-60 h-full flex items-center justify-center transition">
              <BiPlus className="text-white text-2xl " />
            </button>
          </div>
        </Hint>
      </DialogTrigger>
      <DialogContent className="bg-transparent text-white p-0 max-w-[480px] border-none">
        <h1>Please refresh the page after creating an organization</h1>
        <CreateOrganization
          skipInvitationScreen
          afterCreateOrganizationUrl={"/dashboard"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
