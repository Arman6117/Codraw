import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[80%]">
        <h1 className=" text-6xl leading-relaxed text-center font-bold ">
          Empower Team{" "}
          <span className="text-orange-500 underline-offset-2 underline">
            Creativity
          </span>{" "}
          with Our Real-Time <span className="text-pink-600 underline">Collaborative Whiteboard.</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
