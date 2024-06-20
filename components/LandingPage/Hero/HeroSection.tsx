import React from "react";
import Button from "../../Button";
import Image from "next/image";
import { CiLocationArrow1, CiPen } from "react-icons/ci";
import { FaPencilRuler } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
     
     
      <CiPen className="absolute text-5xl opacity-50"/>
      <FaPencilRuler className="absolute left-[6rem] top-[2rem]  text-8xl opacity-30"/>
      <CiLocationArrow1 className="absolute right-[6rem] top-[5rem]  text-8xl opacity-50"/>
      <div className="w-[80%] flex flex-col justify-center items-center space-y-10">
        <h1 className=" text-4xl md:text-6xl leading-relaxed drop-shadow-lg text-center font-bold ">
          Empower Team{" "}
          <span className="text-orange-500 underline-offset-2 underline">
            Creativity
          </span>{" "}
          with Our Real-Time <span className="text-pink-600 underline">Collaborative Whiteboard.</span>
        </h1>
        <div >

        <Button href="/auth/register" className="py-4 px-10 bg-gray-600 hover:bg-gray-950 transition-all"  >
          Sign Up For Free
        </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
