"use client";
import React, { MouseEventHandler, useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import TrashIcon from "../icons/TrashIcon";
import TickIcon from "../icons/TickIcon";
import PencilIcon from "../icons/PencilIcon";

const ProductSectionCard = ({
  productName,
  productDescription,
  sku,
  category,
  stock,
  price,
  status,
  added,
  isClicked,
  onClick,
}: {
  productName: string;
  productDescription: string;
  sku: number;
  category: string;
  stock: number;
  price: number;
  status: "Low Stock" | "Published" | "Draft" | "Out of Stock";
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
        className={`grid grid-cols-[0.2fr,2fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-5 items-center py-3 p-4 min-w-[40rem] sbg-[#f9f9fc] ${
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
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-[#E0E2E7] shrink-0" />
          <div className="">
            <div className="text-xs mb-1 font-[500] text-[#1D1F2C]">
              {productName}
            </div>
            <div className="text-[0.65rem] text-lightGray">
              {productDescription}
            </div>
          </div>
        </div>
        <div className="text-darkBlue text-xs font-[500]">{sku}</div>
        <div className="text-lightGray text-xs font-[500]">{category}</div>
        <div className="text-lightGray text-xs font-[500]">{stock}</div>
        <div className="text-lightGray text-xs font-[500]">{price}</div>
        <div
          className={`px-2 py-[0.3rem] rounded-md text-center text-xs font-[500]
            ${status === "Low Stock" && "bg-[#FFF0EA] text-[#F86624]"}
            ${status === "Published" && "bg-[#E9FAF7] text-[#1A9882]"}
            ${status === "Draft" && "bg-[#F0F1F3] text-[#667085]"} 
            ${status === "Out of Stock" && "bg-[#FEECEE] text-[#EB3D4D]"} 
            `}
        >
          {status}
        </div>
        <div className="text-lightGray text-xs font-[500]">{added}</div>
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

export default ProductSectionCard;
