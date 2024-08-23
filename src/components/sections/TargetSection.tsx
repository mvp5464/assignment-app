import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import Wrapper from "../Wrapper";
import TargetSectionCard from "../cards/TargetSectionCard";
import CircleShowIcon from "../icons/CircleShowIcon";

const TargetSection = () => {
  return (
    <div className="w-full h-full">
      <Wrapper>
        <CardsTopCard title={"Target"} subTitle={"Revenue Target"} />
        <div className="flex justify-center items-center flex-col mt-14 mb-10 relative">
          <div className="w-full absolute -top-16 left-0 felx justify-center items-center">
            <CircleShowIcon
              type="half"
              percentage={100}
              color={"#E0E2E7"}
              className="md:w-full md:h-full w-1/2 h-1/2 -rotate-90"
            />
          </div>
          <div className="w-full absolute -top-16 left-0 ">
            <CircleShowIcon
              type="half"
              percentage={75.55}
              color={"#2086BF"}
              className="md:w-full md:h-full w-1/2 h-1/2 -rotate-90 z-10 "
            />
          </div>
          <div className="text-3xl font-[500]">75.55%</div>
          <div className="text-[0.6rem] bg-green-200  px-2 py-1 rounded-lg text-green-600">
            +10%
          </div>
        </div>
        <div className="text-center text-lightGray text-sm mb-2">
          You succeed earn <span className="text-black">$240</span> today, its
          higher than yesterday
        </div>
        <div className="flex justify-center items-center gap-6">
          <TargetSectionCard title={"Target"} digit={"20k"} arrow="down" />
          <TargetSectionCard title={"Revenue"} digit={"16k"} arrow="up" />
          <TargetSectionCard title={"Today"} digit={"1.5k"} arrow="up" />
        </div>
      </Wrapper>
    </div>
  );
};

export default TargetSection;
