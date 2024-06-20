import Image from "next/image";
import React from "react";

const BrainStormSection = () => {
  return (
    <div className="mt-10 relative overflow-hidden space-y-16 md:space-y-0 h-screen flex-col justify-center items-center md:flex-row flex w-full ">
      <div className="flex flex-col w-full space-y-8">

      <div className=" group relative flex  text-center items-center overflow-hidden px-0 md:px-2 py-8 font-bold font-sans  ">
        <span className="absolute inset-0 w-auto max-w-[390px] z-0 h-9 text-center hidden md:inline translate-y-6 bg-yellow-300 transition-transform duration-300 ease-in-out "></span>
        <span className="text-black text-7xl font-bold absolute">
          Brainstorm
        </span>
      </div>
      <div className="md:w-1/2 text-pretty font-semibold">
        Unleash Your Creative Ideas On An Infinite Canvas And Collaborate In Real Time From Any Location2
      </div>
      </div>
        <Image src={'/Doubs.svg'} alt="" width={1000} height={500} className="absolute -z-10 opacity-5 left-[38rem] overflow-hidden rounded-full grayscale"/>
      <div className="md:w-1/2  mr-16">
        <Image src={'/It_Girl.svg'} alt="IT Girl" width={500} height={500} className="rounded-md"/>
      </div>
    </div>
  );
};

export default BrainStormSection;
