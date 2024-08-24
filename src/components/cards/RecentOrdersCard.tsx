import React from "react";
import EyeIcon from "../icons/EyeIcon";
import TrashIcon from "../icons/TrashIcon";

const RecentOrdersCard = ({
  productName,
  productDetails,
  customerName,
  customerEmail,
  total,
  status,
}: {
  productName: string;
  productDetails: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: "Processing" | "Shiped" | "Delivered";
}) => {
  return (
    <div className="border-b hover:shadow-lg rounded-lg transition 0.2s ease-linear">
      <div className="grid grid-cols-[4fr,3fr,2fr,2fr,2fr] items-center py-3">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-[#E0E2E7]" />
          <div className="">
            <div className="text-xs mb-1 font-[500] text-[#1D1F2C]">
              {productName}
            </div>
            <div className="text-[0.65rem] text-lightGray">
              {productDetails}
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs mb-1 font-[450] text-[#1D1F2C]">
            {customerName}
          </div>
          <div className="text-[0.65rem] text-lightGray">{customerEmail}</div>
        </div>
        <div className="text-lightGray text-xs font-[500]">
          ${total.toFixed(2)}
        </div>
        <div>
          <span
            className={`px-2 py-[0.3rem] rounded-md text-center font-[500] text-xs ${
              status === "Processing" && "bg-[#FFF0EA] text-[#F86624]"
            } ${status === "Shiped" && "bg-[#EAF8FF] text-[#2BB2FE]"} 
            ${status === "Delivered" && "bg-[#E9FAF7] text-[#1A9882]"} `}
          >
            {status}
          </span>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div>
            <EyeIcon className="w-4 h-4" />
          </div>
          <div>
            <TrashIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersCard;
