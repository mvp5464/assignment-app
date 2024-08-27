"use client";
import React, { MouseEventHandler, useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import TrashIcon from "../icons/TrashIcon";
import TickIcon from "../icons/TickIcon";
import PencilIcon from "../icons/PencilIcon";

const CategorySectionCard = ({
  categoryName,
  categoryDescription,
  sold,
  stock,
  added,
  isClicked,
  onClick,
}: {
  categoryName: string;
  categoryDescription?: string;
  sold: string;
  stock: string;
  added: string;
  isClicked: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [onHover, setOnHover] = useState<{
    icon: "pencil" | "eye" | "trash";
    isHovered: boolean;
  }>({ icon: "pencil", isHovered: false });
  return (
    <div className="border-b hover:shadow-lg transition 0.2s ease-linear">
      <div
        className={`grid grid-cols-[0.2fr,8fr,1fr] gap-5 items-center py-3 p-4 min-w-[40rem] sbg-[#f9f9fc] ${
          isClicked ? "bg-[#f4f4f8]" : ""
        }`}
      >
        <button onClick={onClick}>
          <TickIcon
            className={`w-4 h-4 px-[0.2rem] ${
              isClicked ? "bg-darkBlue border-none" : "border-2"
            } rounded-sm`}
          />
        </button>
        <div className="grid grid-cols-[5fr,1fr,1fr,1fr] gap-5 items-center ">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-[#E0E2E7] shrink-0" />
            <div className="">
              <div className="text-xs mb-1 font-[500] text-[#1D1F2C]">
                {categoryName}
              </div>
              <div className="text-[0.65rem] text-lightGray">
                {categoryDescription}
              </div>
            </div>
          </div>
          <div className="text-lightGray text-xs font-[500]">{sold}</div>
          <div className="text-lightGray text-xs font-[500]">{stock}</div>
          <div className="text-lightGray text-xs font-[500]">{added}</div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button
            onMouseEnter={() => setOnHover({ icon: "pencil", isHovered: true })}
            onMouseLeave={() =>
              setOnHover({ icon: "pencil", isHovered: false })
            }
          >
            <PencilIcon
              className="w-4 h-4 "
              color={`${
                onHover.icon === "pencil" && onHover.isHovered
                  ? "#069912"
                  : "#A3A9B6"
              }`}
            />
          </button>
          <button
            onMouseEnter={() => setOnHover({ icon: "eye", isHovered: true })}
            onMouseLeave={() => setOnHover({ icon: "eye", isHovered: false })}
          >
            <EyeIcon
              className="w-4 h-4"
              color={`${
                onHover.icon === "eye" && onHover.isHovered
                  ? "#0f08c9"
                  : "#A3A9B6"
              }`}
            />
          </button>
          <button
            onMouseEnter={() => setOnHover({ icon: "trash", isHovered: true })}
            onMouseLeave={() => setOnHover({ icon: "trash", isHovered: false })}
          >
            <TrashIcon
              className="w-4 h-4"
              color={`${
                onHover.icon === "trash" && onHover.isHovered
                  ? "#c90808"
                  : "#A3A9B6"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySectionCard;
