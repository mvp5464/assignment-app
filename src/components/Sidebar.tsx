import React from "react";
import SidebarCard from "./cards/SidebarCard";
import Logo from "./icons/Logo";
import DashboardIcon from "./icons/DashboardIcon";
import ECommerceIcon from "./icons/ECommerceIcon";
import ProjectIcon from "./icons/ProjectIcon";
import ContactIcon from "./icons/ContactIcon";
import FileManagerIcon from "./icons/FileManagerIcon";
import ChatIcon from "./icons/ChatIcon";
import CalendarIcon from "./icons/CalendarIcon";

const Sidebar = () => {
  return (
    <div className="bg-white">
      <div className="flex p-5 gap-3 mb-4">
        <div>
          <Logo className="w-8 h-8" />
        </div>
        <div className="font-semibold text-xl">Mytech</div>
      </div>
      <div>
        <SidebarCard
          image={<DashboardIcon />}
          title={"Dashboard"}
          notification={0}
        />
        <SidebarCard
          image={<ECommerceIcon />}
          title={"E-Commerce"}
          notification={2}
          hasChild={true}
        />
        <SidebarCard
          image={<ProjectIcon color={true} />}
          title={"Project"}
          selected={true}
          notification={0}
        />
        <SidebarCard
          image={<ContactIcon />}
          title={"Contact"}
          notification={0}
          hasChild={true}
        />
        <SidebarCard
          image={<FileManagerIcon />}
          title={"File Manager"}
          notification={0}
        />
        <SidebarCard image={<ChatIcon />} title={"Chat"} notification={0} />
        <SidebarCard
          image={<CalendarIcon />}
          title={"Calendar"}
          notification={0}
        />
      </div>
    </div>
  );
};

export default Sidebar;
