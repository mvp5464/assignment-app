"use client";
import React, { useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import Pagination from "../../Pagination";
import MinusIcon from "../../icons/MinusIcon";
import {
  productSectionData,
  ProductSectionDataType,
} from "@/utils/data/ProductSectionData";
import ProductSectionCard from "@/components/cards/ProductSectionCard";

export type CategoryApiType = {
  id: string;
  categoryName: string;
  categoryDescription: string;
  sold: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

const ProductTableSection = () => {
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const [sortedCategoryData, setSortedCategoryData] =
    useState<ProductSectionDataType[]>(productSectionData);

  const handleAllSelect = () => {
    if (isClicked.length > 0) setIsClicked([]);
    else {
      sortedCategoryData?.forEach((val) =>
        setIsClicked((ids) => [...ids, val.id])
      );
    }
  };

  const handleCardSelect = (val: ProductSectionDataType) => {
    const hasId = isClicked.find((id) => id === val.id);
    if (!hasId) {
      setIsClicked((ids) => [...ids, val.id]);
    } else {
      setIsClicked(isClicked.filter((ids) => ids !== val.id));
    }
  };

  const handleProductSort = () => {
    setSortedCategoryData(
      productSectionData
        .slice()
        .sort((a, b) => a.productName.localeCompare(b.productName))
    );
  };

  const handleStockSort = () => {
    setSortedCategoryData(
      productSectionData.slice().sort((a, b) => a.stock - b.stock)
    );
  };

  const handlePriceSort = () => {
    setSortedCategoryData(
      productSectionData.slice().sort((a, b) => a.price - b.price)
    );
  };

  const handleStatusSort = () => {
    setSortedCategoryData(
      productSectionData
        .slice()
        .sort((a, b) => a.status.localeCompare(b.status))
    );
  };

  const handleAddedSort = () => {
    new Date("19 Sep 2022").getTime();
    setSortedCategoryData(
      productSectionData
        .slice()
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
    );
  };

  console.log({ sortedCategoryData });

  return (
    <div className="bg-white rounded-xl py-4 w-full transition 0.2s ease-linear hover:shadow-lg">
      <div className="md:overflow-hidden overflow-x-auto">
        <div className="grid grid-cols-[0.2fr,2fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-5 text-xs font-[500] px-4 pb-4 min-w-[40rem]">
          <button onClick={handleAllSelect}>
            <MinusIcon
              className={`w-4 h-4 px-[0.2rem] ${
                isClicked.length > 0 ? "bg-darkBlue border-none" : "border-2"
              }  rounded-sm`}
            />
          </button>
          <button
            className="flex justify-between items-center pr-4 cursor-pointer"
            onClick={handleProductSort}
          >
            <span>Product</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <div className="flex justify-between items-center pr-4 cursor-pointer">
            SKU
          </div>
          <div className="flex justify-between items-center pr-4 cursor-pointer">
            Category
          </div>
          <button
            className="flex justify-between items-center pr-4"
            onClick={handleStockSort}
          >
            <span>Stock</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            className="flex justify-between items-center pr-4 "
            onClick={handlePriceSort}
          >
            <span>Price</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            className="flex justify-between items-center pr-4 "
            onClick={handleStatusSort}
          >
            <span>Status</span>
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
          {sortedCategoryData?.map((val) => (
            <ProductSectionCard
              key={val.id}
              productName={val.productName}
              productDescription={val.productDescription}
              sku={val.sku}
              category={val.category}
              stock={val.stock}
              price={val.price}
              status={val.status}
              added={val.createdAt}
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

export default ProductTableSection;
