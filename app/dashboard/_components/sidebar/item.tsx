"use client";

import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface itemProps {
  id: string;
  imageUrl: string;
  name: string;
}

const Item = ({ id, name, imageUrl }: itemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id == id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };
  return (
    <div className="relative aspect-square">
        <Hint label={name} side="right" align="start" sideOffset={18}>

      <Image
        fill
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition", isActive && "opacity-100"
            )}
            />
            </Hint>
    </div>
  );
};

export default Item;
