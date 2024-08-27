import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import CustomerGrowthCard from "../cards/CustomerGrowthCard";
import Wrapper from "../Wrapper";
import MapIcon from "../icons/MapIcon";
import { customerGrowthData } from "@/utils/data/CustomerGrowthData";

const CustomerGrowthSection = () => {
  return (
    <Wrapper>
      <CardsTopCard title={"Customer Growth"} subTitle={"Based on Country"} />
      <div>
        <MapIcon className=" w-full h-full" />
      </div>
      <div>
        {customerGrowthData.map((val) => (
          <CustomerGrowthCard
            key={val.id}
            color={val.color}
            country={val.country}
            customers={val.customers}
            percentage={val.percentage}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CustomerGrowthSection;
