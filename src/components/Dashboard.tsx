import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TitleSection from "./sections/TitleSection";
import MainInfoSection from "./sections/MainInfoSection";
import TargetSection from "./sections/TargetSection";
import StatisticSection from "./sections/StatisticSection";
import SalesSourceSection from "./sections/SalesSourceSection";
import TopProductSection from "./sections/TopProductSection";
import TopCategorySection from "./sections/TopCategorySection";
import RecentOrdersSection from "./sections/RecentOrdersSection";
import CustomerGrowthSection from "./sections/CustomerGrowthSection";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-6">
        <TitleSection />
      </div>
      <div className="mb-6">
        <MainInfoSection />
      </div>
      <div className="grid grid-cols-[1fr,2fr] h-80 gap-6 mb-6">
        <div className="h-80">
          <TargetSection />
        </div>
        <div className="h-80">
          <StatisticSection />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
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
      <div className="grid grid-cols-[2fr,1fr] gap-6 mb-4s">
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
