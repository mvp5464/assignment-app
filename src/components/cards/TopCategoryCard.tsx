import React from "react";

const TopCategoryCard = ({
  icon,
  title,
  digit,
  percentage,
  bgColor,
  textColor,
}: {
  icon: React.JSX.Element;
  title: string;
  digit: string;
  percentage: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div className="flex justify-between items-center gap-3 text-xs">
      <div className={`${bgColor && bgColor} p-2 rounded-full`}>{icon}</div>
      <div className="grow ">{title}</div>
      <div>{digit}</div>
      <div
        // className={`bg-[#F0F1F3] font-[500] text-[#4A4C56] text-xs p-1 rounded-lg`}
        className={`${bgColor && bgColor} font-[500] ${
          textColor && textColor
        } text-xs p-1 rounded-lg`}
      >{`${percentage}%`}</div>
    </div>
  );
};

export default TopCategoryCard;
