"use client";
import React, { useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import {
  categorySectionData,
  CategorySectionDataType,
} from "@/utils/data/CategorySectionData";
import CategorySectionCard from "../cards/CategorySectionCard";
import Pagination from "../Pagination";
import MinusIcon from "../icons/MinusIcon";

const CategoryTableSection = () => {
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const [sortedCategoryData, setSortedCategoryData] =
    useState<CategorySectionDataType[]>(categorySectionData);

  const handleAllSelect = () => {
    if (isClicked.length > 0) setIsClicked([]);
    else {
      categorySectionData.forEach((val) =>
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
      categorySectionData
        .slice()
        .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
    );
  };

  const handleSoldSort = () => {
    setSortedCategoryData(
      categorySectionData.slice().sort((a, b) => a.sold - b.sold)
    );
  };

  const handleStockSort = () => {
    setSortedCategoryData(
      categorySectionData.slice().sort((a, b) => a.stock - b.stock)
    );
  };

  const handleAddedSort = () => {
    new Date("19 Sep 2022").getTime();
    setSortedCategoryData(
      categorySectionData
        .slice()
        .sort(
          (a, b) => new Date(a.added).getTime() - new Date(b.added).getTime()
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
          {sortedCategoryData.map((val) => (
            <CategorySectionCard
              key={val.id}
              categoryName={val.categoryName}
              categoryDescription={val.categoryDescription}
              sold={val.sold.toLocaleString()}
              stock={val.stock.toLocaleString()}
              added={val.added}
              isClicked={isClicked.some((id) => id === val.id)}
              onClick={() => handleCardSelect(val)}
            />
          ))}
        </div>
        <div className="p-4 min-w-[40rem]">
          <Pagination itemsPerPage={10} totalItems={100} totalButton={5} />
        </div>
      </div>
    </div>
  );
};

export default CategoryTableSection;
