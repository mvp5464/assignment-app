import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import DownloadIcon from "../icons/DownloadIcon";
import PlusIcon from "../icons/PlusIcon";

const BreadcrumbTitleSection = () => {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <div className="text-2xl font-[500] mb-2">Categories</div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-[#2086BF] font-[500]"
                  href="/dashboard"
                >
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <ArrowDownIcon className="w-4 h-4 -rotate-90" color="#C2C6CE" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#667085]">
                  Categories
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 font-[500]">
        <button className="bg-lightBlue px-3 py-3 rounded-lg flex justify-center items-center text-xs gap-2 text-darkBlue">
          <DownloadIcon className="w-4 h-4" />
          <span>Export</span>
        </button>
        <button className="bg-darkBlue px-3 py-3 rounded-lg flex justify-center items-center text-white text-xs gap-2">
          <PlusIcon className="w-4 h-4 " />
          <span>Add Category</span>
        </button>
      </div>
    </div>
  );
};

export default BreadcrumbTitleSection;
