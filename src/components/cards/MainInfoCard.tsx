import React from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import Wrapper from "../Wrapper";

const MainInfoCard = ({
  title,
  numbers,
  percentage,
  changes,
  icon,
}: {
  title: string;
  numbers: string;
  percentage: number;
  changes: number;
  icon: React.JSX.Element;
}) => {
  return (
    <div className="mb-4">
      <Wrapper>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="text-lightGray">{title}</div>
            <div className="font-[500] text-3xl">{numbers}</div>
            <div className="flex justify-center items-center gap-3">
              <div className=" flex items-center gap-2">
                <span className="text-[#1A9882] text-sm font-semibold">
                  {percentage}%
                </span>
                <span>
                  <ArrowDownIcon
                    color={"#1A9882"}
                    className="w-4 h-4 rotate-180"
                  />
                </span>
              </div>
              <div className="text-lightGray text-sm">{`+\$${changes} today`}</div>
            </div>
          </div>
          <div>{icon}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MainInfoCard;
