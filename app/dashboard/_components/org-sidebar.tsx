"use client";

import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

import { LuLayoutDashboard } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { BiHeart } from "react-icons/bi";

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');
  return (
    <div
      className="h-full lg:flex hidden lg:flex-col   space-y-7 w-[206px] pl-5 
        "
    >
      <Link href={"/"}>
        <div className="flex items-center justify-center  gap-x-2 ">
          <Image
            src={"/Codraw_transparent.png"}
            alt="logo"
            width={150}
            height={0}
            className="relative -top-16"
          />
        </div>
      </Link>
      <div className="relative flex flex-col space-y-5 w-full -top-24">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                scale: "1.1",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                justifyContent: "space-between",
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
              },
            },
          }}
        />
      <div className="space-y-1 w-full">
        <Button className="justify-start w-full px-5 font-semibold "
         variant={favorites?'ghost':'secondary'}
         size={'lg'} 
         asChild >
          <Link href={"/"} >
            <LuLayoutDashboard className="h-4 w-4 mr-2" />
            Team Boards
          </Link>
        </Button>
        <Button className="justify-start w-full px-5 font-semibold " 
        variant={favorites?'secondary':'ghost'}
        size={'lg'} 
        asChild >
          <Link href={{
            href:"/",
            query:{favorites:true}
          }} >
            <BiHeart className="h-4 w-4 mr-2" />
            Favorites
          </Link>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default OrgSidebar;
