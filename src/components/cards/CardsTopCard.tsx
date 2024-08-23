import React from "react";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";

const CardsTopCard = ({
  title,
  subTitle,
  dots = true,
}: {
  title: string;
  subTitle?: string;
  dots?: boolean;
}) => {
  return (
    <div className="flex justify-between items-centers">
      <div>
        <div className="font-[500] text-lg mb-1">{title}</div>
        <div className={`${subTitle ? "" : "hidden"} text-lightGray text-xs`}>
          {subTitle}
        </div>
      </div>
      <div className={`${dots ? "" : "hidden"} p-1`}>
        <ThreeDotsIcon className="w-4 h-4" />
      </div>
    </div>
  );
};

export default CardsTopCard;
