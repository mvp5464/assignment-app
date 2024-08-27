import React from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";

const Pagination = ({
  itemsPerPage,
  totalItems,
  totalButton,
}: {
  itemsPerPage: number;
  totalItems: number;
  totalButton: number;
}) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-lightGray">{`Showing 1-${itemsPerPage} from ${totalItems}`}</div>
      <div className="flex justify-center items-center  gap-2">
        <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
          <ArrowDownIcon className="w-4 h-4 rotate-90" color={"#2086BF"} />
        </div>
        {Array(totalButton)
          .fill({})
          .map((i, j) => (
            <div
              key={j}
              className="bg-[#2086BF] text-[#EAF8FF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs "
            >
              {j + 1}
            </div>
          ))}
        <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
          ...
        </div>
        <div className="bg-[#EAF8FF] text-[#2086BF] h-[1.8rem] w-[1.8rem] rounded-lg flex justify-center items-center text-xs ">
          <ArrowDownIcon className="w-4 h-4 -rotate-90" color={"#2086BF"} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
