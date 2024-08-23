import React from "react";
import MainInfoCard from "../cards/MainInfoCard";
import TotalProjectBoxIcon from "../icons/TotalProjectBoxIcon";
import InProgressBoxIcon from "../icons/InProgressBoxIcon";
import FinishedBoxIcon from "../icons/FinishedBoxIcon";
import UnfinishedBoxIcon from "../icons/UnfinishtedBoxIcon";

const MainInfoSection = () => {
  return (
    <div className=" md:flex justify-between items-center w-full gap-5">
      <MainInfoCard
        title={"Total Project"}
        numbers={"6,784"}
        percentage={10}
        changes={150}
        icon={
          <TotalProjectBoxIcon className="w-8 h-8 bg-[#EAF8FF] p-2 rounded-lg" />
        }
      />
      <MainInfoCard
        title={"In Progress"}
        numbers={"1,920"}
        percentage={10}
        changes={150}
        icon={
          <InProgressBoxIcon className="w-8 h-8 bg-[#FFF0EA] p-2 rounded-lg" />
        }
      />
      <MainInfoCard
        title={"Finished"}
        numbers={"4,412"}
        percentage={10}
        changes={150}
        icon={
          <FinishedBoxIcon className="w-8 h-8 bg-[#E9FAF7] p-2 rounded-lg" />
        }
      />
      <MainInfoCard
        title={"Unfinished"}
        numbers={"329"}
        percentage={10}
        changes={150}
        icon={
          <UnfinishedBoxIcon className="w-8 h-8 bg-[#FDECEE] p-2 rounded-lg" />
        }
      />
    </div>
  );
};

export default MainInfoSection;
