"use client";
import React, { useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import Pagination from "../../Pagination";
import MinusIcon from "../../icons/MinusIcon";
import {
  orderSectionData,
  OrderSectionDataType,
} from "@/utils/data/OrderSectionData";
import OrderSectionCard from "@/components/cards/OrderSectionCard";

export type CategoryApiType = {
  id: string;
  categoryName: string;
  categoryDescription: string;
  sold: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

const OrderTableSection = () => {
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const [sortedOrderData, setSortedOrderData] =
    useState<OrderSectionDataType[]>(orderSectionData);

  const handleAllSelect = () => {
    if (isClicked.length > 0) setIsClicked([]);
    else {
      sortedOrderData?.forEach((val) =>
        setIsClicked((ids) => [...ids, val.id])
      );
    }
  };

  const handleCardSelect = (val: OrderSectionDataType) => {
    const hasId = isClicked.find((id) => id === val.id);
    if (!hasId) {
      setIsClicked((ids) => [...ids, val.id]);
    } else {
      setIsClicked(isClicked.filter((ids) => ids !== val.id));
    }
  };

  const handleProductSort = () => {
    setSortedOrderData(
      orderSectionData
        .slice()
        .sort((a, b) => a.productName.localeCompare(b.productName))
    );
  };

  const handleStockSort = () => {
    setSortedOrderData(
      orderSectionData.slice().sort((a, b) => a.orderId - b.orderId)
    );
  };

  const handleTotalSort = () => {
    setSortedOrderData(
      orderSectionData.slice().sort((a, b) => a.total - b.total)
    );
  };

  const handleStatusSort = () => {
    setSortedOrderData(
      orderSectionData.slice().sort((a, b) => a.status.localeCompare(b.status))
    );
  };

  const handleDateSort = () => {
    new Date("19 Sep 2022").getTime();
    setSortedOrderData(
      orderSectionData
        .slice()
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    );
  };

  console.log({ sortedOrderData });

  return (
    <div className="bg-white rounded-xl py-4 w-full transition 0.2s ease-linear hover:shadow-lg">
      <div className="md:overflow-hidden overflow-x-auto">
        <div className="grid grid-cols-[0.2fr,0.7fr,2.3fr,1fr,1.3fr,1fr,1fr,1fr,0.5fr] gap-4 text-xs font-[500] px-4 pb-4 min-w-[40rem]">
          <button onClick={handleAllSelect}>
            <MinusIcon
              className={`w-4 h-4 px-[0.2rem] ${
                isClicked.length > 0 ? "bg-darkBlue border-none" : "border-2"
              }  rounded-sm`}
            />
          </button>
          <div className="flex justify-between items-center pr-4">Order ID</div>
          <button
            className="flex justify-between items-center pr-4"
            onClick={handleProductSort}
          >
            <span>Product</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            className="flex justify-between items-center pr-4"
            onClick={handleDateSort}
          >
            <span>Date</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <div className="flex justify-between items-center pr-4">Customer</div>
          <button
            className="flex justify-between items-center pr-4 "
            onClick={handleTotalSort}
          >
            <span>Total</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <div className="flex justify-between items-center pr-4">Payment</div>
          <button
            className="flex justify-between items-center pr-4 "
            onClick={handleStatusSort}
          >
            <span>Status</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <div className="flex justify-end items-center pr-4">Action</div>
        </div>
        <div className="min-w-[40rem] mb-4">
          {sortedOrderData?.map((val) => (
            <OrderSectionCard
              key={val.id}
              orderId={val.orderId}
              productName={val.productName}
              productDescription={val.productDescription}
              date={val.date}
              customer={val.customer}
              total={val.total}
              payment={val.payment}
              status={val.status}
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

export default OrderTableSection;
