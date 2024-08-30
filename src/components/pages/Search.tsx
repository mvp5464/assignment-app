"use client";
import { UserDataType } from "@/utils/data/dummyUserData";
import React, { useEffect, useState } from "react";

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
      <div className=" md:w-2/3 w-full text-[#2D2D2D] rounded-lg bg-[#EBEBEB] placeholder-[#999999] focus:outline-[#999999] focus:outline border border-[#999999] p-2 flex  items-center md:overflow-hidden overflow-x-auto">
        <div>
          {selectedResult.map((val) => (
            <span key={val.key} className="bg-white p-2 rounded-lg mr-2">
              {val.value}
            </span>
          ))}
        </div>
        <div className=" w-full">
          <input
            className=" py-3 px-2 ml-2 text-[#2D2D2D] rounded-lg bg-[#EBEBEB] placeholder-[#999999] focus:outline-none focus:outlines w-full min-w-32"
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
                console.log();
                setSearchValue({
                  //@ts-ignore
                  key: e.target.innerText,
                  value: "",
                });
                //@ts-ignore
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
                setSelectedResult((val) => [
                  ...val,
                  //@ts-ignore
                  { key: searchValue.key, value: e.target.innerText },
                ]);
                setTitle(title.filter((data) => data !== searchValue.key));
                setSearchValue({
                  key: "",
                  value: "",
                });
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
