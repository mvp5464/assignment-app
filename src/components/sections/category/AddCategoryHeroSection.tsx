"use client";
import React, { useContext } from "react";
import BreadcrumbTitleSection from "../BreadcrumbTitleSection";
import PlusIcon from "@/components/icons/PlusIcon";
import CancelIcon from "@/components/icons/CancelIcon";
import { addCategory } from "@/actions/categories";
import { CategoryContext } from "@/context/CategoryContextProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AddCategoryHeroSection = () => {
  const { category } = useContext(CategoryContext);
  const router = useRouter();

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4  justify-between md:items-center items-start mb-4">
        <BreadcrumbTitleSection
          oldPaths={[
            { title: "Dashboard", link: "/dashboard" },
            { title: "Categories", link: "/dashboard/categories" },
          ]}
          currentPath={"Add Category"}
          title={"Add Category"}
        />
        <div className="flex items-center md:justify-center justify-between md:w-auto w-full gap-3 font-[500]">
          <Link
            href={"/dashboard/categories"}
            className="border px-3 py-3 rounded-lg flex justify-center items-center text-xs gap-2 text-lightGray"
          >
            <CancelIcon className="w-4 h-4" />
            <span>Cancel</span>
          </Link>
          <button
            className="bg-darkBlue px-3 py-3 rounded-lg flex justify-center items-center text-white text-xs gap-2"
            onClick={async () => {
              console.log({
                categoryName: category.categoryName,
                Description: category.description,
              });
              const data = await addCategory({
                categoryName: category.categoryName,
                categoryDescription: category.description as string,
              });
              if (data) {
                router.push("/dashboard/categories");
              }
            }}
          >
            <PlusIcon className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCategoryHeroSection;
