import React from "react";
import CalendarIcon from "./icons/CalendarIcon";
import BellIcon from "./icons/BellIcon";
import MessageIcon from "./icons/MessageIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import SearchIcon from "./icons/SearchIcon";

const Navbar = () => {
  return (
    <div className="flex justify-between  mb-5">
      <div className="flex gap-2  items-center">
        <SearchIcon />
        <input type="text" placeholder="Search" className="bg-[#f7f7fa]" />
      </div>
      <div className="flex gap-2 ">
        <div className="flex gap-6 justify-center h-10 items-center ">
          <div>
            <CalendarIcon />
          </div>
          <div className="relative">
            <BellIcon className="w-4 h-4" />
            <div className=" bg-[#2BB2FE] px-1 font-bold rounded-sm text-[0.6rem] text-white absolute -top-2 -right-1">
              {2}
            </div>
          </div>
          <div className="relative">
            <MessageIcon className="w-4 h-4" />
            <div className=" bg-[#2BB2FE] px-1 font-bold rounded-sm text-[0.6rem] text-white absolute -top-2 -right-1">
              {2}
            </div>
          </div>
          <div>
            <div className="bg-[#E0E2E7] mx-2 h-6 w-6 rounded-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 border-l pl-2">
          <div className="relative">
            <div className="bg-[#E0E2E7] mx-2 h-8 w-8 rounded-full" />
            <span className=" absolute -bottom-[0.1rem] right-2 bg-[#22CAAD] text-white text-xs py-[0.3rem] px-[0.3rem] rounded-full leading-3 border-[2px] border-white" />
          </div>
          <div>
            <div className="text-sm ">Jenil Patel</div>
            <div className="text-xs">Manager</div>
          </div>
          <div>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
