import React from "react";
import RecentOrdersCard from "../cards/RecentOrdersCard";
import Wrapper from "../Wrapper";
import CalendarIcon from "../icons/CalendarIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import FilterIcon from "../icons/FilterIcon";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";

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
          <div className="flex justify-center items-center gap-2 p-2 border bg-white text-xs rounded-lg text-[#4A4C56] font-[500]">
            <CalendarIcon className="w-5 h-5" />
            <span>Select Dates</span>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 border bg-white text-xs rounded-lg text-[#4A4C56] font-[500]">
            <FilterIcon className="w-5 h-5" />
            <span>Filters</span>
          </div>
          <div className=" text-sm rounded-lg px-3 py-2 bg-[#EAF8FF] text-[#2086BF] font-[500]">
            See All
          </div>
        </div>
        <div>
          <ThreeDotsIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="md:overflow-hidden overflow-x-auto -mx-4 px-4 ">
        <div className="grid grid-cols-[4fr,3fr,2fr,2fr,2fr] px-2 gap-5 py-3 min-w-[30rem] md:w-[100vh] bg-[#F0F1F3]">
          <div className="flex justify-between items-center ml-4s text-sm">
            <span>Product</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <div>Customer</div>
          <div className="flex justify-between items-center ml-4 text-sm">
            <span>Total</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <div className="flex justify-between items-center ml-4 text-sm">
            <span>Status</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <div>Action</div>
        </div>
        <div className="min-w-[30rem] ">
          <RecentOrdersCard
            productName={"Handmande Pouch"}
            productDetails={"+3 other products"}
            customerName={"John Bushmill"}
            customerEmail={"Johnb@gmail.com"}
            total={121}
            status={"Processing"}
          />
          <RecentOrdersCard
            productName={"Smartwatch E2"}
            productDetails={"+1 other products"}
            customerName={"Ilham BUdi Agung"}
            customerEmail={"ilahmbudi@gmail.com"}
            total={590}
            status={"Processing"}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-lightGray">Showing 1-5 from 100</div>
        <div className="flex justify-center items-center  gap-2">
          <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
            <ArrowDownIcon className="w-4 h-4 rotate-90" color={"#2086BF"} />
          </div>
          <div className="bg-[#2086BF] text-[#EAF8FF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
            1
          </div>
          <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
            2
          </div>
          <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
            3
          </div>
          <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
            ...
          </div>
          <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
            <ArrowDownIcon className="w-4 h-4 -rotate-90" color={"#2086BF"} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecentOrdersSection;
