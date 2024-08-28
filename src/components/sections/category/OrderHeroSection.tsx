import React from "react";
import BreadcrumbTitleSection from "../BreadcrumbTitleSection";
import DownloadIcon from "@/components/icons/DownloadIcon";
import PlusIcon from "@/components/icons/PlusIcon";

const OrderHeroSection = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4  justify-between md:items-center items-start mb-4">
        <BreadcrumbTitleSection
          title={"Order"}
          oldPaths={[{ title: "Dashboard", link: "/dashboard" }]}
          currentPath={"Order List"}
        />
        <div className="flex items-center md:justify-center justify-between md:w-auto w-full gap-3 font-[500]">
          <button
            className="bg-lightBlue px-3 py-3 rounded-lg flex justify-center items-center text-xs gap-2 text-darkBlue cursor-not-allowed hover:brightness-75"
            disabled
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button
            className="bg-darkBlue px-3 py-3 rounded-lg flex justify-center items-center text-white text-xs gap-2 cursor-not-allowed hover:brightness-75"
            disabled
          >
            <PlusIcon className="w-4 h-4 " />
            <span>Add Product</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderHeroSection;
