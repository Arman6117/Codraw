import React from "react";

const Participants = () => {
  return (
    <div className="absolute top-2 right-44 shadow-md shadow-slate-400 h-10 px-4 rounded-full border-2 border-pink-600  bg-white flex justify-center items-center">
      Participants
    </div>
  );
};

export default Participants;

Participants.Skeleton = function ParticipantsSKeleton () {
  return (
    <div className="absolute top-2 right-44 shadow-md shadow-slate-400 h-10 px-4 rounded-full   bg-white flex justify-center items-center"/>
  )
}
