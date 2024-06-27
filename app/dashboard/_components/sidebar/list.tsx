"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Item from "./item";

const List = () => {
  const router = useRouter();
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  

  
  if (!userMemberships.data?.length) return null;
  
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Item 
        key={mem.organization.id}
         id={mem.organization.id}
         imageUrl={mem.organization.imageUrl}
         name={mem.organization.name}
        />
      ))}
    </ul>
  );
};

export default List;
