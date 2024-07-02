"use client";
import { SignOutButton, UserButton, useOrganization } from "@clerk/nextjs";

import React from "react";
import EmptyOrg from "../_components/empty-org";
import BoardList from "../_components/board-list";

interface DashboardPagePros {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}
const DashboardPage = ({ searchParams }: DashboardPagePros) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 p-6 h-[calc(100%-80px)] ">
      {/* {JSON.stringify(searchParams)} */}
      {!organization ? <EmptyOrg /> : <BoardList  orgId={organization.id} query={searchParams}/>}
    </div>
  );
};

export default DashboardPage;
