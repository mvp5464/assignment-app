import React from "react";
import RecentOrdersCard from "../cards/RecentOrdersCard";
import Wrapper from "../Wrapper";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import FilterIcon from "../icons/FilterIcon";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";
import { DatePickerWithRange } from "../DatePicker";
import { recentOrdersData } from "@/utils/data/RecentOrdersData";
import Pagination from "../Pagination";

const RecentOrdersSection = () => {
  return (
    <Wrapper>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center items-center gap-3">
          <div className="font-[500] text-lg mb-1">Recent Orders</div>
          <div className="bg-[#E9FAF7] p-1 text-sm text-[#1A9882] rounded-lg">
            +2 Orders
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-3 hidden">
          <DatePickerWithRange />
          <button className="flex hover:bg-slate-200 transition 0.2s ease-linear justify-center items-center gap-2 p-2 border bg-white text-xs rounded-lg text-[#4A4C56] font-[500]">
            <FilterIcon className="w-5 h-5" />
            <div>Filters</div>
          </button>
          <button className=" hover:opacity-50 transition 0.2s ease-linear text-sm rounded-lg px-3 py-2 bg-[#EAF8FF] text-[#2086BF] font-[500]">
            See All
          </button>
        </div>
        <div className="md:hidden block">
          <ThreeDotsIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="md:overflow-hidden overflow-x-auto -mx-4 px-4 ">
        <div className="grid grid-cols-[4fr,3fr,2fr,2fr,2fr] px-2 gap-5 text-sm py-3 min-w-[30rem] md:w-[100vh] bg-[#F0F1F3]">
          <div className="flex justify-between items-center">
            <span>Product</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <div>Customer</div>
          <div className="flex justify-between items-center">
            <span>Total</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <div className="flex justify-between items-center">
            <span>Status</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <div className="text-right mr-4">Action</div>
        </div>
        <div className="min-w-[30rem] mb-4">
          {recentOrdersData.map((val) => (
            <RecentOrdersCard
              key={val.id}
              productName={val.productName}
              productDetails={val.productDetails || ""}
              customerName={val.customerName}
              customerEmail={val.customerEmail}
              total={val.total}
              status={val.status}
            />
          ))}
        </div>
      </div>
      <Pagination itemsPerPage={5} totalItems={100} totalButton={3} />
    </Wrapper>
  );
};

export default RecentOrdersSection;
