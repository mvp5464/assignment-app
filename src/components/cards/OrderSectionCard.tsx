"use client";
import React, { MouseEventHandler, useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import TrashIcon from "../icons/TrashIcon";
import TickIcon from "../icons/TickIcon";

const OrderSectionCard = ({
  orderId,
  productName,
  productDescription,
  date,
  customer,
  total,
  payment,
  status,
  isClicked,
  onClick,
}: {
  orderId: number;
  productName: string;
  productDescription: string;
  date: string;
  customer: string;
  total: number;
  payment: string;
  status: "Processing" | "Delivered" | "Cancelled" | "Shiped" | "Published";
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
        className={`grid grid-cols-[0.2fr,0.7fr,2.3fr,1fr,1.3fr,1fr,1fr,1fr,0.5fr] gap-4 items-center py-3 p-4 min-w-[40rem] sbg-[#f9f9fc] ${
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
        <div className="text-darkBlue text-xs font-[500]">{orderId}</div>
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
        <div className="text-lightGray text-xs font-[500]">{date}</div>
        <div className="text-lightGray text-xs font-[500]">{customer}</div>
        <div className="text-lightGray text-xs font-[500]">{total}</div>
        <div className="text-lightGray text-xs font-[500]">{payment}</div>
        <div
          className={`px-2 py-[0.3rem] rounded-md text-center font-[500] text-xs 
            ${status === "Processing" && "bg-[#FFF0EA] text-[#F86624]"}
            ${status === "Shiped" && "bg-[#EAF8FF] text-[#2BB2FE]"} 
            ${status === "Delivered" && "bg-[#E9FAF7] text-[#1A9882]"} 
            ${status === "Published" && "bg-[#E9FAF7] text-[#1A9882]"} 
            ${status === "Cancelled" && "bg-[#FEECEE] text-[#EB3D4D]"} 
            `}
        >
          {status}
        </div>
        <div className="flex justify-center items-center gap-3">
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

export default OrderSectionCard;
