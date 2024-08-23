"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SidebarCard from "./cards/SidebarCard";
import Logo from "./icons/Logo";
import DashboardIcon from "./icons/DashboardIcon";
import ECommerceIcon from "./icons/ECommerceIcon";
import ProjectIcon from "./icons/ProjectIcon";
import ContactIcon from "./icons/ContactIcon";
import FileManagerIcon from "./icons/FileManagerIcon";
import ChatIcon from "./icons/ChatIcon";
import CalendarIcon from "./icons/CalendarIcon";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log({ path });
  }, [path]);

  const handleOnClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="bg-white min-h-screen sticky top-0 left-0 md:block hidden">
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">|||</Button>
        </SheetTrigger>
        <SheetContent side="left"> */}
      <div className="flex p-5 gap-3 mb-4">
        <div>
          <Logo className="w-8 h-8" />
        </div>
        <div className="font-semibold text-xl">Mytech</div>
      </div>
      <div>
        <SidebarCard
          image={<DashboardIcon color={path === "/dashboard" && true} />}
          title={"Dashboard"}
          notification={0}
          selected={path === "/dashboard" && true}
          onClick={() => handleOnClick("/dashboard")}
        />
        <SidebarCard
          image={
            <ECommerceIcon color={path === "/dashboard/order_list" && true} />
          }
          title={"E-Commerce"}
          notification={2}
          hasChild={true}
          selected={path === "/dashboard/order_list" && true}
          onClick={() => handleOnClick("/dashboard/order_list")}
        />
        <SidebarCard
          image={
            <ProjectIcon color={path === "/dashboard/product_list" && true} />
          }
          title={"Project"}
          selected={path === "/dashboard/product_list" && true}
          notification={0}
          onClick={() => handleOnClick("/dashboard/product_list")}
        />
        <SidebarCard
          image={<ContactIcon color={path === "/contact" && true} />}
          title={"Contact"}
          notification={0}
          selected={path === "/contact" && true}
          hasChild={true}
          onClick={() => handleOnClick("/contact")}
        />
        <SidebarCard
          image={<FileManagerIcon color={path === "/file_manager" && true} />}
          title={"File Manager"}
          selected={path === "/file_manager" && true}
          notification={0}
          onClick={() => handleOnClick("/file_manager")}
        />
        <SidebarCard
          image={<ChatIcon color={path === "/chat" && true} />}
          title={"Chat"}
          selected={path === "/chat" && true}
          notification={0}
          onClick={() => handleOnClick("/chat")}
        />
        <SidebarCard
          image={<CalendarIcon color={path === "/calender" && true} />}
          title={"Calendar"}
          selected={path === "/calender" && true}
          notification={0}
          onClick={() => handleOnClick("/calender")}
        />
      </div>
      {/* </SheetContent>
      </Sheet> */}
    </div>
  );
};

export default Sidebar;
