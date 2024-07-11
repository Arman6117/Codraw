"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { LuMoreHorizontal } from "react-icons/lu";
interface BoardCardProps {
  id: string;
  title: string;
  orgId: string;
  authorName: string;
  authorId: string;
  createdAt: string | number;
  imageUrl: string;
  isFavorite: boolean;
}
const BoardCard = ({
  authorId,
  authorName,
  createdAt,
  id,
  imageUrl,
  isFavorite,
  orgId,
  title,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });
  return (
    <Link href={`/boards/${id}`}>
      <div className="group border drop-shadow-sm aspect-[100/127] flex flex-col justify-between rounded-lg overflow-hidden ">
        <div className="relative flex-1 bg-fuchsia-50 ">
          <Image src={imageUrl} fill alt={title} className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 py-2 px-3 outline-none">
              <LuMoreHorizontal className="text-white h-7 w-7 opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="group  drop-shadow-sm aspect-[100/127] flex flex-col justify-between rounded-lg overflow-hidden ">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
