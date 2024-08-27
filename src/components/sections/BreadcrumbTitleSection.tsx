"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import ArrowDownIcon from "../icons/ArrowDownIcon";

interface BreadcrumbType {
  oldPaths: { title: string; link: string }[];
  currentPath: string;
  title: string;
}

const BreadcrumbTitleSection = ({
  oldPaths,
  currentPath,
  title,
}: BreadcrumbType) => {
  return (
    <div>
      <div className="text-2xl font-[500] mb-2">{title}</div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            {oldPaths?.map((val) => (
              <React.Fragment key={val.link}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-[#2086BF] font-[500]"
                    href={val.link}
                  >
                    {val.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <ArrowDownIcon className="w-4 h-4 -rotate-90" color="#C2C6CE" />
              </React.Fragment>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#667085]">
                {currentPath}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbTitleSection;
