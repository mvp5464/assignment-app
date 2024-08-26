"use client";
import { useRouter } from "next/navigation";

import { Suspense } from "react";

const SidebarButtonCard = ({
  menu,
  image,
  notification,
  selected = false,
}: {
  menu: { title: string; link?: string };
  image?: React.JSX.Element;
  notification: number;
  selected?: boolean;
}) => {
  const router = useRouter();

  const handleSubMenuOnClick = (link: string | undefined) => {
    if (link) {
      router.push(`/${link}`);
    }
  };
  return (
    <div
      className={`flex justify-start items-center gap-[0.4rem] px-4 py-3 ${
        selected ? "text-[#2086BF] bg-[#EAF8FF]" : "text[#858D9D]"
      }  mb-1 relative cursor-pointer w-full`}
      onClick={() => {
        handleSubMenuOnClick(menu.link);
      }}
    >
      {selected && (
        <span className="w-1 h-full bg-[#2086BF] z-10 absolute top-0 left-0" />
      )}
      <div className={`${image ? "visible" : "invisible w-6"}`}>
        <Suspense fallback={<>Loading...</>}>{image}</Suspense>
      </div>
      <div className="text-xs grow text-start font-semibold ">{menu.title}</div>
      <div
        className={`${
          notification === 0 ? "hidden" : ""
        } bg-[#2BB2FE] px-1 font-bold rounded-sm text-[0.6rem] text-white`}
      >
        {notification}
      </div>
    </div>
  );
};

export default SidebarButtonCard;
