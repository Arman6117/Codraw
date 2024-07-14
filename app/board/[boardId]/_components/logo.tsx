import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="absolute md:inline hidden top-2 left-2  h-12 w-32   ">
      <Link href={"/dashboard"}>
        <Image
          alt="Logo"
          src={"/Codraw_transparent.png"}
          width={120}
          height={120}
          className="absolute right-1 -translate-y-1/2"
        />
      </Link>
    </div>
  );
};

export default Logo;
