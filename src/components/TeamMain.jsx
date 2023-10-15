import React from "react";
import TeamCard from "./TeamCard";

const TeamMain = () => {
  return (
    <div className="pt-28 flex items-center flex-col gap-5 w-[95%] mx-3 lg:mx-16">
      <h2 className="font-bold text-6xl stroke-text-1 self-start text-center lg:text-left w-full lg:w-1/3 ">
      The faces of Genci.
      </h2>

      <TeamCard/>
    </div>
  );
};

export default TeamMain;
