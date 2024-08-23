import React from "react";
import { DatePickerWithRange } from "../DatePicker";

const TitleSection = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <div className="text-2xl">Welcome Back Jenit</div>
        <div className="text-lightGray">
          Lorem ipsum dolor si amet welcome back jenil
        </div>
      </div>
      <DatePickerWithRange />
    </div>
  );
};

export default TitleSection;
