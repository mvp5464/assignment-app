"use client";
import React, { useState } from "react";

import CardsTopCard from "../cards/CardsTopCard";
import Wrapper from "../Wrapper";
import LineChart from "../LineChart";
import { RevenueData, SalesData } from "@/utils/UserInfo";

interface UserInterface {
  myLabel: string[];
  myData: {
    revenue: number[];
    sales: number[];
  };
}

const StatisticSection = () => {
  const [userData, setUserData] = useState<UserInterface>({
    myLabel: RevenueData.map((data) => data.month),
    myData: {
      revenue: RevenueData.map((data) => data.totalRevenue),
      sales: SalesData.map((data) => data.totalRevenue),
    },
  });

  return (
    <Wrapper>
      <div>
        <CardsTopCard title={"Statistic"} subTitle={"Revenue and Sales"} />
      </div>
      <div className="h-[90%] w-[100%]">
        <LineChart userData={userData.myData} userLables={userData.myLabel} />
      </div>
    </Wrapper>
  );
};

export default StatisticSection;
