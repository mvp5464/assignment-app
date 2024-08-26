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
    <div className="flex justify-between items-center gap-3 text-xs hover:shadow-lg rounded-lg transition 0.2s ease-linear">
      <div className={`${bgColor && bgColor} p-2 rounded-full`}>
        {icon && icon}
      </div>
      <div className="grow ">{title}</div>
      <div>{digit}</div>
      <div
        className={`${bgColor && bgColor} font-[500] ${
          textColor && textColor
        } text-xs p-1 rounded-lg`}
      >{`${percentage}%`}</div>
    </div>
  );
};

export default TopCategoryCard;
