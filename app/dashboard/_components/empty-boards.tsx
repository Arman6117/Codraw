import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const EmptyBoards = () => {
  
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-2">
      <Image
        src={"/empty-boards.svg"}
        alt="empty search"
        width={240}
        height={240}
      />
      <h2 className="text-3xl font-bold mt-2">Create Your First Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try By Creating Your First Organization
      </p>
      <div className="mt-6">
        <Button size={"lg"}>Create Board</Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
