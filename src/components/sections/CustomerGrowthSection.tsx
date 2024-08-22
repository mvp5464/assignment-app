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
          color={"#22CAAD"}
          country={"USA"}
          customers={"1,240"}
          percentage={80}
        />
        <CustomerGrowthCard
          color={"#F86624"}
          country={"Japan"}
          customers={"1,240"}
          percentage={60}
        />
        <CustomerGrowthCard
          color={"#F9C80E"}
          country={"France"}
          customers={"1,240"}
          percentage={49}
        />
        <CustomerGrowthCard
          color={"#2086BF"}
          country={"Germany"}
          customers={"1,240"}
          percentage={100}
        />
        <CustomerGrowthCard
          color={"#EB3D4D"}
          country={"South Korea"}
          customers={"1,240"}
          percentage={50}
        />
      </div>
    </Wrapper>
  );
};

export default CustomerGrowthSection;
