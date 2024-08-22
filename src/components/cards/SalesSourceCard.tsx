import React from "react";

const SalesSourceCard = ({
  color,
  name,
  digit,
}: {
  color: string;
  name: string;
  digit: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <div className={`bg-[${color}] w-2 h-2 rounded-full`}></div>
        <div className="text-[#4A4C56] text-sm">{name}</div>
      </div>
      <div className="text-sm">{digit}</div>
    </div>
  );
};

export default SalesSourceCard;
