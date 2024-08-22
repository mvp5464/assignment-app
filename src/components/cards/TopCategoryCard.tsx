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
    <div className="flex justify-between items-center gap-3">
      <div className={`bg-[${bgColor}] p-2 rounded-full`}>{icon}</div>
      <div className="grow">{title}</div>
      <div>{digit}</div>
      <div
        className={`bg-[${bgColor}] font-[500] text-[${textColor}] text-xs p-1 rounded-lg`}
      >{`${percentage}%`}</div>
    </div>
  );
};

export default TopCategoryCard;
