import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";

const EmptyOrg = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src={"/element.svg"} alt="empty" width={200} height={200} />
      <h2 className="text-4xl mt-2  font-bold">Welcome to Codraw</h2>
      <p className=" text-muted-foreground mt-3">Create an organization to get started</p>
      <div className="mt-6">
        <Dialog>
            <DialogTrigger asChild>
                <Button size={'lg'}>
                    Create organization
                </Button>
            </DialogTrigger>
            <DialogContent className="absolute left-1/2 transform translate-x-1/2 inset-0 flex items-center justify-center p-0 bg-transparent border-none max-w-[480px]">
            <div className="relative">
              <CreateOrganization />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
