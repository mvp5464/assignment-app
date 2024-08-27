import React from "react";
import BreadcrumbTitleSection from "../BreadcrumbTitleSection";
import DownloadIcon from "@/components/icons/DownloadIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import Link from "next/link";

const CategoryHeroSection = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4  justify-between md:items-center items-start mb-4">
        <BreadcrumbTitleSection
          oldPaths={[{ title: "Dashboard", link: "/dashboard" }]}
          currentPath={"Categories"}
          title={"Categories"}
        />
        <div className="flex items-center md:justify-center justify-between md:w-auto w-full gap-3 font-[500]">
          <button className="bg-lightBlue px-3 py-3 rounded-lg flex justify-center items-center text-xs gap-2 text-darkBlue">
            <DownloadIcon className="w-4 h-4" />
            <span>Export</span>
          </button>
          <Link
            href={"categories/add_categories"}
            className="bg-darkBlue px-3 py-3 rounded-lg flex justify-center items-center text-white text-xs gap-2"
          >
            <PlusIcon className="w-4 h-4 " />
            <span>Add Category</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryHeroSection;
