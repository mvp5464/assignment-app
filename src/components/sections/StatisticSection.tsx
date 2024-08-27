"use client";
import React, { useState } from "react";

import CardsTopCard from "../cards/CardsTopCard";
import Wrapper from "../Wrapper";
import LineChart from "../LineChart";
import { RevenueData, SalesData } from "@/utils/data/UserInfo";

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
    <div className="w-full h-full">
      <Wrapper>
        <CardsTopCard title={"Statistic"} subTitle={"Revenue and Sales"} />
        <LineChart userData={userData.myData} userLables={userData.myLabel} />
      </Wrapper>
    </div>
  );
};

export default StatisticSection;
