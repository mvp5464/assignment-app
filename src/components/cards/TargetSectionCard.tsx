import React from "react";
import PointUpArrowIcon from "../icons/PointUpArrowIcon";

const TargetSectionCard = ({
  title,
  digit,
  arrow,
}: {
  title: string;
  digit: string;
  arrow: "up" | "down";
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-1">
      <div className="text-xs text-lightGray">{title}</div>
      <div className="flex justify-center items-center gap-2">
        <div className="font-[500] text-lg">${digit}</div>
        <div>
          {arrow === "up" ? (
            <PointUpArrowIcon color="#22CAAD" className="w-3 h-3 rotate-180" />
          ) : (
            <PointUpArrowIcon color="#EB3D4D" className="w-3 h-3 rotate-180" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TargetSectionCard;
