"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EmptyBoards = () => {
  const router = useRouter()
  const { mutate, pending } = useApiMutation(api.board.createBoard);
  const { organization } = useOrganization();
  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        
        toast.success("Board created successfully");
        router.push(`/board/${id}`)
      })
      .catch((err) => {
        toast.error("Failed to create board");
      });
  };
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
        <Button onClick={onClick} disabled={pending} size={"lg"}>
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
