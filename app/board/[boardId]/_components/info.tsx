import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const Info = () => {
  return (
    <div className="absolute right-2 flex justify-center items-center top-2 shadow-md shadow-slate-400 w-28 h-10 px- rounded-md   bg-white">
      Board Name
    </div>
  );
};

export default Info;

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute right-2 flex justify-center items-center top-2 shadow-md shadow-slate-400 h-10  rounded-md  w-28  bg-white" />
  );
};
