"use client";
import { UserDataType } from "@/utils/data/dummyUserData";
import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<UserDataType[]>([]);
  const [title, setTitle] = useState<string[]>([
    "firstName",
    "lastName",
    "email",
  ]);
  const [selectedResult, setSelectedResult] = useState<
    {
      key: string;
      value: string;
    }[]
  >([]);
  const [searchValue, setSearchValue] = useState<{
    key: string;
    value: string;
  }>({ key: "", value: "" });

  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const fetchData = async () => {
    if (!searchValue.key || !searchValue.value) return;
    const res = await fetch("/api/user", {
      method: "GET",
      headers: { searchvalue: searchValue.value, searchkey: searchValue.key },
    });
    const data = await res.json();
    setSearchResult(data.find);
  };

  useEffect(() => {
    if (searchValue.value) {
      fetchData();
    }
  }, [searchValue.value]);

  return (
    <div>
      <div className=" md:w-2/3 w-full text-[#2D2D2D] rounded-lg bg-[#EBEBEB] placeholder-[#999999] focus:outline-[#999999] focus:outline border border-[#999999]  flex  items-center md:overflow-hidden overflow-x-auto px-2">
        <div className="py-3">
          {selectedResult.map((val) => (
            <span key={val.key} className="bg-white p-2 rounded-lg mr-2">
              {val.value}
            </span>
          ))}
        </div>
        <div className={`w-full ${title.length > 0 ? "block" : "hidden"}`}>
          <input
            className=" py-3 px-2 ml-2 text-[#2D2D2D] rounded-lg bg-[#EBEBEB] placeholder-[#999999] focus:outline-none focus:outlines w-full min-w-32"
            ref={inputRef}
            type="text"
            placeholder={searchValue.key || "Search"}
            value={!searchValue.key ? "" : searchValue.value}
            onChange={(e) =>
              setSearchValue((val) => ({ ...val, value: e.target.value }))
            }
            onClick={() => {
              searchValue.key || setIsSelected(true);
            }}
          />
        </div>
      </div>
      {isSelected && title.length > 0 && (
        <div className="border border-slate-600 rounded-md bg-slate-200s w-2/3">
          {title.map((val) => (
            <div
              className="border-b border-slate-600 py-4 px-2"
              key={val}
              onClick={(e) => {
                const innerValue = e.currentTarget.innerText;
                setSearchValue({
                  key: innerValue,
                  value: "",
                });
                focus();
                setIsSelected(false);
              }}
            >
              {val}
            </div>
          ))}
        </div>
      )}
      <div>
        {searchResult.map((val, index) => {
          if (index > 5) return;
          return (
            <div
              key={val.id}
              onClick={(e) => {
                const innerValue = e.currentTarget.innerText;
                setSelectedResult((val) => [
                  ...val,
                  { key: searchValue.key, value: innerValue },
                ]);
                setTitle(title.filter((data) => data !== searchValue.key));
                setSearchValue({
                  key: "",
                  value: "",
                });
                focus();
                setSearchResult([]);
              }}
            >
              {val[searchValue.key as keyof typeof val]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
