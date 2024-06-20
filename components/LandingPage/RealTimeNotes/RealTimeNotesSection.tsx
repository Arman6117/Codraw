import Image from "next/image";
import React from "react";

const RealTimeNotesSection = () => {
  return (
    <div className="mt-10 relative overflow-hidden space-y-16 md:space-y-0 h-screen flex-col justify-center items-center md:flex-row flex w-full md:justify-between md:space-x-20">
      {/* <Image src={'/Doubs.svg'} alt="" width={1000} height={500} className="absolute -z-10 opacity-5 left-[38rem] overflow-hidden rounded-full grayscale"/> */}
      <div className="md:w-1/2  mr-16">
        <Image
          src={"/sticky_note.jpeg"}
          alt="Sticky Note"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className="flex md:ml-40 flex-col  space-y-2">
        <div className=" h-[30%]  group relative flex   items-center overflow-hidden  px-1 md:py-24 py-14 font-bold font-sans  ">
          <span className="absolute inset-0 w-auto max-w-[450px] z-0 h-9 text-center translate-y-14 hidden md:inline bg-yellow-300 transition-transform duration-300 ease-in-out "></span>
          <span className="absolute inset-0 w-auto max-w-[150px] z-0 h-7 text-center translate-y-28 hidden md:inline bg-yellow-300 transition-transform duration-300 ease-in-out "></span>
          <span className="text-black text-5xl font-bold absolute">
            Real-Time Meeting Notes
          </span>
        </div>
        <div className=" md:w-1/2 w-[95%]  text-pretty font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus tempore voluptas hic minima! Hic atque placeat ratione. So
        </div>
      </div>
    </div>
  );
};

export default RealTimeNotesSection;
