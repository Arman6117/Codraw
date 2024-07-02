import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-2">
      <Image
        src={"/empty-search.svg"}
        alt="empty search"
        width={240}
        height={240}
      />
      <h2 className="text-3xl font-bold mt-2">No Results Found !!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Searching For Something Else
      </p>
    </div>
  );
};

export default EmptySearch;
