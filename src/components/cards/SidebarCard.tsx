import React from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const SidebarCard = ({
  image,
  title,
  notification,
  hasChild = false,
  selected = false,
}: {
  image: React.JSX.Element;
  title: string;
  notification: number;
  hasChild?: boolean;
  selected?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-[0.4rem] px-4 py-[0.6rem] ${
        selected ? "text-[#2086BF] bg-[#EAF8FF]" : "text[#858D9D]"
      }  mb-2 relative`}
    >
      {selected && (
        <span className="w-1 h-full bg-[#2086BF] z-10 absolute top-0 left-0" />
      )}
      <div>{image}</div>
      <div className="text-xs grow font-semibold ">{title}</div>
      <div
        className={`${
          notification === 0 ? "hidden" : ""
        } bg-[#2BB2FE] px-1 font-bold rounded-sm text-[0.6rem] text-white`}
      >
        {notification}
      </div>
      <div className={`${hasChild ? "" : "hidden"}`}>
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default SidebarCard;
