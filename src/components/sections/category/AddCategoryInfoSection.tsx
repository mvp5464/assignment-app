"use client";
import ThumbnailIcon from "@/components/icons/ThumbnailIcon";
import Wrapper from "@/components/Wrapper";
import { CategoryContext } from "@/context/CategoryContextProvider";
import React, { useContext } from "react";

const AddCategoryInfoSection = () => {
  const { setCategory } = useContext(CategoryContext);
  return (
    <div className="grid grid-cols-[0.9fr,3fr] gap-6">
      <Wrapper>
        <div className="h-auto">
          <div className="font-[500] text-lg mb-2">Thumbnail</div>
          <div className="text-xs text-lightGray my-2">photo</div>
          <div className="flex flex-col justify-center items-center gap-5 border-dashed border-2 bg-[#f9f9fc] rounded-lg px-2 py-6">
            <div className="bg-darkBlue p-3 rounded-lg">
              <ThumbnailIcon className="w-4 h-4" />
            </div>
            <div className="text-xs text-lightGray text-center">
              Drag and drop image here, or click add image
            </div>
            <button className="text-sm text-darkBlue bg-lightBlue px-3 py-2 rounded-lg font-[500]">
              Add Image
            </button>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <div className="font-[500] text-lg mb-2">General Information</div>
          <div className="mb-2">
            <div className="text-xs text-lightGray my-2">Category Name</div>
            <input
              type="text"
              placeholder="Type category name here..."
              className="px-2 py-1 w-full bg-[#f9f9fc] rounded-lg border placeholder:text-sm"
              onChange={(e) =>
                setCategory((val) => ({ ...val, categoryName: e.target.value }))
              }
            />
          </div>
          <div>
            <div className="text-xs text-lightGray my-2">Description</div>
            <textarea
              rows={6}
              placeholder="Type category description here..."
              className="px-2 py-1 w-full bg-[#f9f9fc] rounded-lg border placeholder:text-sm resize-none"
              onChange={(e) =>
                setCategory((val) => ({ ...val, description: e.target.value }))
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AddCategoryInfoSection;
