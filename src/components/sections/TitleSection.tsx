import React from "react";
import CalendarIcon from "../icons/CalendarIcon";

const TitleSection = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <div className="text-2xl">Welcome Back Jenit</div>
        <div className="text-secondary">
          Lorem ipsum dolor si amet welcome back jenil
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 border bg-white text-xs rounded-lg text-[#4A4C56] font-[500]">
        <CalendarIcon className="w-5 h-5" />
        <span>Select Dates</span>
      </div>
    </div>
  );
};

export default TitleSection;
