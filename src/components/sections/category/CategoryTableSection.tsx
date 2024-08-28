"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import { CategorySectionDataType } from "@/utils/data/CategorySectionData";
import CategorySectionCard from "../../cards/CategorySectionCard";
import Pagination from "../../Pagination";
import MinusIcon from "../../icons/MinusIcon";
import { getCategory } from "@/actions/categories";
import { dateFormatFunction } from "@/utils/functionUtils";
import TableSkeleton from "@/components/TableSkeleton";

export type CategoryApiType = {
  id: string;
  categoryName: string;
  categoryDescription: string;
  sold: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

const CategoryTableSection = () => {
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortedCategoryData, setSortedCategoryData] =
    useState<CategorySectionDataType[]>();

  useEffect(() => {
    const updateViews = async () => {
      const data = await getCategory();
      if (data) {
        setSortedCategoryData(data.category);
        setIsLoading(false);
      } else {
        // Show Toast of error
      }
    };

    updateViews();
  }, []);

  const handleAllSelect = () => {
    if (isClicked.length > 0) setIsClicked([]);
    else {
      sortedCategoryData?.forEach((val) =>
        setIsClicked((ids) => [...ids, val.id])
      );
    }
  };

  const handleCardSelect = (val: CategorySectionDataType) => {
    const hasId = isClicked.find((id) => id === val.id);
    if (!hasId) {
      setIsClicked((ids) => [...ids, val.id]);
    } else {
      setIsClicked(isClicked.filter((ids) => ids !== val.id));
    }
  };

  const handleCategorySort = () => {
    setSortedCategoryData(
      sortedCategoryData
        ?.slice()
        .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
    );
  };

  const handleSoldSort = () => {
    setSortedCategoryData(
      sortedCategoryData?.slice().sort((a, b) => a.sold - b.sold)
    );
  };

  const handleStockSort = () => {
    setSortedCategoryData(
      sortedCategoryData?.slice().sort((a, b) => a.stock - b.stock)
    );
  };

  const handleAddedSort = () => {
    new Date("19 Sep 2022").getTime();
    setSortedCategoryData(
      sortedCategoryData
        ?.slice()
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
    );
  };

  return (
    <div className="bg-white rounded-xl py-4 w-full transition 0.2s ease-linear hover:shadow-lg">
      <div className="md:overflow-hidden overflow-x-auto">
        <div className="grid grid-cols-[0.2fr,5fr,1fr,1fr,1fr,1fr] gap-5 text-xs font-[500] px-4 pb-4 min-w-[40rem]">
          <button onClick={handleAllSelect}>
            <MinusIcon
              className={`w-4 h-4 px-[0.2rem] ${
                isClicked.length > 0 ? "bg-darkBlue border-none" : "border-2"
              }  rounded-sm`}
            />
          </button>
          <button
            className="flex justify-between items-center pr-4 cursor-pointer"
            onClick={handleCategorySort}
          >
            <span>Category Name</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            className="flex justify-between items-center pr-4 "
            onClick={handleSoldSort}
          >
            <span>Sold</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            className="flex justify-between items-center pr-4"
            onClick={handleStockSort}
          >
            <span>Stock</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            className="flex justify-between items-center pr-4"
            onClick={handleAddedSort}
          >
            <span>Added</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <div className="flex justify-end items-center pr-4">Action</div>
        </div>
        <div className="min-w-[40rem] mb-4">
          {isLoading && <TableSkeleton />}
          {sortedCategoryData?.length === 0 && !isLoading && (
            <div className="font-bold text-sm text-center p-4 text-lightGray bg-lightBlue">
              No categories to show
            </div>
          )}
          {sortedCategoryData?.map((val) => (
            <CategorySectionCard
              key={val.id}
              categoryName={val.categoryName}
              categoryDescription={val.categoryDescription}
              sold={val.sold.toLocaleString()}
              stock={val.stock.toLocaleString()}
              added={dateFormatFunction(val.createdAt)}
              isClicked={isClicked.some((id) => id === val.id)}
              onClick={() => handleCardSelect(val)}
            />
          ))}
        </div>
        <div className="p-4 min-w-[40rem]">
          <Pagination
            itemsPerPage={
              sortedCategoryData?.length
                ? sortedCategoryData?.length <= 10
                  ? sortedCategoryData?.length
                  : 10
                : 0
            }
            totalItems={sortedCategoryData?.length || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryTableSection;
