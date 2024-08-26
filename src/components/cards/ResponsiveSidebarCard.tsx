"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AccordionContent, AccordionTrigger } from "../ui/accordion";
import SidebarButtonCard from "./SidebarButtonCard";
import { SheetClose } from "../ui/sheet";

const ResponsiveSidebarCard = ({
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
        <SheetClose asChild>
          <SidebarButtonCard
            menu={menu}
            notification={notification}
            selected={path === `/${menu.link}` && true}
            image={image}
          />
        </SheetClose>
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
                <SheetClose asChild>
                  <SidebarButtonCard
                    menu={item}
                    notification={notification}
                    selected={path === `/${item.link}` && true}
                  />
                </SheetClose>
              </AccordionContent>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResponsiveSidebarCard;
