import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import CustomerGrowthCard from "../cards/CustomerGrowthCard";
import Wrapper from "../Wrapper";
import MapIcon from "../icons/MapIcon";

const CustomerGrowthSection = () => {
  return (
    <Wrapper>
      <CardsTopCard title={"Customer Growth"} subTitle={"Based on Country"} />
      <div>
        <MapIcon className=" w-full h-full" />
      </div>
      <div>
        <CustomerGrowthCard
          color={"bg-[#22CAAD]"}
          country={"USA"}
          customers={"1,240"}
          percentage={"w-[80%]"}
        />
        <CustomerGrowthCard
          color={"bg-[#F86624]"}
          country={"Japan"}
          customers={"1,240"}
          percentage={"w-[60%]"}
        />
        <CustomerGrowthCard
          color={"bg-[#F9C80E]"}
          country={"France"}
          customers={"1,240"}
          percentage={"w-[49%]"}
        />
        <CustomerGrowthCard
          color={"bg-[#2086BF]"}
          country={"Germany"}
          customers={"1,240"}
          percentage={"w-[100%]"}
        />
        <CustomerGrowthCard
          color={"bg-[#EB3D4D]"}
          country={"South Korea"}
          customers={"1,240"}
          percentage={"w-[50%]"}
        />
      </div>
    </Wrapper>
  );
};

export default CustomerGrowthSection;
