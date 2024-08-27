import React from "react";
import MainInfoCard from "../cards/MainInfoCard";
import { LazySvg } from "../lazy-svg";
import { mainInfoData } from "@/utils/data/MainInfoData";

const MainInfoSection = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center w-full gap-5">
      {mainInfoData.map((val) => (
        <MainInfoCard
          key={val.id}
          title={val.title}
          numbers={val.numbers}
          percentage={val.percentage}
          changes={val.changes}
          icon={
            <LazySvg
              name={val.icon}
              className="w-8 h-8 bg-[#EAF8FF] p-2 rounded-lg"
            />
          }
        />
      ))}
    </div>
  );
};

export default MainInfoSection;
