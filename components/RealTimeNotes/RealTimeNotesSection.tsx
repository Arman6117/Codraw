import Image from "next/image";
import React from "react";

const RealTimeNotesSection = () => {
  return (
    <div className="mt-10 relative overflow-hidden h-screen flex w-full justify-between space-x-20">
      {/* <Image src={'/Doubs.svg'} alt="" width={1000} height={500} className="absolute -z-10 opacity-5 left-[38rem] overflow-hidden rounded-full grayscale"/> */}
      <div className="w-1/2  mr-16">
        <Image
          src={"/sticky_note.jpeg"}
          alt="IT Girl"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className="flex ml-40 flex-col  space-y-8">
        <div className=" h-[30%]  group relative flex   items-center overflow-hidden  px-2 py-8 font-bold font-sans  ">
          <span className="absolute inset-0 w-auto max-w-[450px] z-0 h-9 text-center translate-y-14 bg-yellow-300 transition-transform duration-300 ease-in-out "></span>
          <span className="absolute inset-0 w-auto max-w-[150px] z-0 h-7 text-center translate-y-28 bg-yellow-300 transition-transform duration-300 ease-in-out "></span>
          <span className="text-black text-5xl font-bold absolute">
            Real-Time Meeting Notes
          </span>
        </div>
        <div className="w-1/2  text-pretty font-semibold">
          Unleash Your Creative Ideas On An Infinite Canvas And Collaborate In
          Real Time From Any Location2
        </div>
      </div>
    </div>
  );
};

export default RealTimeNotesSection;
