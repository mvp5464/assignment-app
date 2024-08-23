import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import SalesSourceCard from "../cards/SalesSourceCard";
import Wrapper from "../Wrapper";
import CircleShowIcon from "../icons/CircleShowIcon";

const SalesSourceSection = () => {
  return (
    <Wrapper>
      <div className=" flex flex-col justify-center h-full ">
        <CardsTopCard title="Sales Source" />
        <div className="grow min-h-48 flex flex-col justify-center items-center relative w-full">
          <CircleShowIcon
            type="full"
            percentage={100}
            color={"#D5F0FF"}
            className="w-[95%] h-[95%] absolute -top-0 left-0"
          />
          <CircleShowIcon
            type="full"
            percentage={40}
            color={"#2086BF"}
            className="w-[95%] h-[95%] z-50 absolute -top-0 left-0"
          />
          <CircleShowIcon
            type="full"
            percentage={60}
            color={"#2BB2FE"}
            className="w-[95%] h-[95%] z-40 absolute -top-0 left-0"
          />
          <CircleShowIcon
            type="full"
            percentage={70}
            color={"#80D1FE"}
            className="w-[95%] h-[95%] z-30 absolute -top-0 left-0"
          />
          <div className="font-[500] text-2xl">$75.5k</div>
          <div className="bg-[#E9FAF7] text-[#1A9882] px-2 rounded-lg text-xs">
            +10%
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <SalesSourceCard
            bgColor={"bg-[#2086BF]"}
            name={"Official Website"}
            digit={"$10,000"}
          />
          <SalesSourceCard
            bgColor={"bg-[#2BB2FE]"}
            name={"Official Store"}
            digit={"$10,000"}
          />
          <SalesSourceCard
            bgColor={"bg-[#80D1FE]"}
            name={"Amazon Store"}
            digit={"$10,000"}
          />
          <SalesSourceCard
            bgColor={"bg-[#D5F0FF]"}
            name={"Reseller"}
            digit={"$10,000"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SalesSourceSection;
