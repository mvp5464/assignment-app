import React from "react";

const TopProductCard = ({
  title,
  subTitle,
  digit,
}: {
  title: string;
  subTitle: string;
  digit: string;
}) => {
  return (
    <div className="flex gap-3 justify-betweena items-center">
      {/* <div className=" flex items-center"> */}
      <div className="h-10 w-10 rounded-lg bg-[#E0E2E7]" />
      <div className="grow">
        <div className="text-sm ">{title}</div>
        <div className="text-secondary text-xs">{subTitle}</div>
      </div>
      {/* </div> */}
      <div className="text-sm">${digit}</div>
    </div>
  );
};

export default TopProductCard;
