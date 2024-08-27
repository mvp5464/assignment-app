import { navbarData } from "@/utils/data/NavbarData";
import { Accordion, AccordionItem } from "./ui/accordion";
import Logo from "./icons/Logo";
import { LazySvg } from "./lazy-svg";
import SidebarCard from "./cards/SidebarCard";
import ResponsiveSidebarCard from "./cards/ResponsiveSidebarCard";

const Sidebar = ({ isResponsive = false }: { isResponsive?: boolean }) => {
  return (
    <Accordion type="single" collapsible className="mr-4 sticky top-0 left-0">
      <AccordionItem value="logo" className="border-none">
        <div className="flex p-5 gap-3 mb-4">
          <div>
            <Logo className="w-8 h-8" />
          </div>
          <div className="font-semibold text-xl">Mytech</div>
        </div>
      </AccordionItem>
      {navbarData.map((val) => (
        <AccordionItem
          key={val.menu.title}
          value={val.menu.title}
          className="border-none"
        >
          {isResponsive ? (
            <ResponsiveSidebarCard
              key={val.menu.title}
              menu={val.menu}
              subMenu={val.subMenu}
              notification={0}
              image={<LazySvg name={val.menu.image} />}
            />
          ) : (
            <SidebarCard
              key={val.menu.title}
              menu={val.menu}
              subMenu={val.subMenu}
              notification={0}
              image={<LazySvg name={val.menu.image} />}
            />
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Sidebar;
