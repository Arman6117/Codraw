import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";

import React from "react";
import { LuPlus } from "react-icons/lu";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <LuPlus className="h-4 w-4 mr-2" />
          <span className="font-sans font-semibold">Invite members</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px] scale-[0.8]">
        <OrganizationProfile/>
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
