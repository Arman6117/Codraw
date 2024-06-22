import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src={"/Codraw_transparent.png"}
        alt="logo"
        width={200}
        height={200}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
