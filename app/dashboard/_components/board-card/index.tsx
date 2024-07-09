"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import{ formatDistanceToNow}  from 'date-fns'
import Footer from "./footer";
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
  const{ userId} = useAuth();
  const authorLabel = (userId === authorId )? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  })
  return (
    <Link href={`/boards/${id}`}>
      <div className="group border drop-shadow-sm aspect-[100/127] flex flex-col justify-between rounded-lg overflow-hidden ">
        <div className="relative flex-1 bg-fuchsia-50 ">
          <Image src={imageUrl} fill alt={title} className="object-fit" />
        <Overlay/>
        </div>
         <Footer 
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick = {()=> {}}
          disabled={false}
         />
      </div>
    </Link>
  );
};

export default BoardCard;
