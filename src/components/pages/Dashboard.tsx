import React from "react";
import TitleSection from "../sections/TitleSection";
import MainInfoSection from "../sections/MainInfoSection";
import TargetSection from "../sections/TargetSection";
import StatisticSection from "../sections/StatisticSection";
import SalesSourceSection from "../sections/SalesSourceSection";
import TopProductSection from "../sections/TopProductSection";
import TopCategorySection from "../sections/TopCategorySection";
import RecentOrdersSection from "../sections/RecentOrdersSection";
import CustomerGrowthSection from "../sections/CustomerGrowthSection";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-6">
        <TitleSection />
      </div>
      <div className="mb-6">
        <MainInfoSection />
      </div>
      <div className="grid md:grid-cols-[1fr,2fr] grid-cols-1 md:grid-rows-1 grid-rows-[1fr,1fr] gap-6 mb-6">
        <div>
          <TargetSection />
        </div>
        <div>
          <StatisticSection />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-6 mb-6">
        <div>
          <SalesSourceSection />
        </div>
        <div>
          <TopProductSection />
        </div>
        <div>
          <TopCategorySection />
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr,1fr] grid-cols-1 md:grid-rows-1 grid-rows-[1fr,1fr] gap-6 ">
        <div>
          <RecentOrdersSection />
        </div>
        <div>
          <CustomerGrowthSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
