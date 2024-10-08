import React from "react";

const CustomerGrowthCard = ({
  country,
  customers,
  percentage,
  color,
}: {
  country: string;
  customers: string;
  percentage: string;
  color: string;
}) => {
  return (
    <div className="flex justify-between items-center my-4 hover:shadow-lg rounded-lg transition 0.2s ease-linear">
      <div className="flex justify-center items-center">
        <div className="bg-[#E0E2E7] mx-2 h-8 w-8 rounded-full" />
        <div>
          <div className="text-sm">{country}</div>
          <div className="text-lightGray text-xs">
            {`${customers} Customers`}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-2 rounded-full w-20 overflow-hidden bg-[#E0E2E7]">
          <div
            className={`h-2 ${percentage && percentage} ${color && color}`}
          />
        </div>
        <div className="text-lightGray w-8 text-xs">{`${
          percentage.match(/\d+/)?.[0]
        }%`}</div>
      </div>
    </div>
  );
};

export default CustomerGrowthCard;
