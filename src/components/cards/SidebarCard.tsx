"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AccordionContent, AccordionTrigger } from "../ui/accordion";
import SidebarButtonCard from "./SidebarButtonCard";

const SidebarCard = ({
  menu,
  subMenu,
  image,
  notification,
}: {
  menu: { title: string; link?: string };
  subMenu?: { title: string; link: string }[];
  image: React.JSX.Element;
  notification: number;
}) => {
  const path = usePathname();
  return (
    <div className="block">
      {!subMenu ? (
        <SidebarButtonCard
          menu={menu}
          notification={notification}
          selected={path === `/${menu.link}` && true}
          image={image}
        />
      ) : (
        <>
          <AccordionTrigger className="p-0">
            <SidebarButtonCard
              menu={menu}
              notification={notification}
              image={image}
            />
          </AccordionTrigger>
          <div>
            {subMenu?.map((item) => (
              <AccordionContent key={item.link} className="p-0">
                <SidebarButtonCard
                  menu={item}
                  notification={notification}
                  selected={path === `/${item.link}` && true}
                />
              </AccordionContent>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarCard;
