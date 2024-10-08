import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import CalendarIcon from "./icons/CalendarIcon";
import BellIcon from "./icons/BellIcon";
import MessageIcon from "./icons/MessageIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import SearchIcon from "./icons/SearchIcon";
import ThreeBarsIcon from "./icons/ThreeBarsIcon";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 justify-center items-center md:ml-0 -ml-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden block px-3">
                <ThreeBarsIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-auto w-2/3 px-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#f7f7fa] md:w-full w-1/2"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="md:flex gap-6 justify-center h-10 items-center hidden ">
            <button>
              <CalendarIcon />
            </button>
            <button className="relative">
              <BellIcon className="w-4 h-4" />
              <div className=" bg-[#2BB2FE] px-1 font-bold rounded-sm text-[0.6rem] text-white absolute -top-2 -right-1">
                {2}
              </div>
            </button>
            <button className="relative">
              <MessageIcon className="w-4 h-4" />
              <div className=" bg-[#2BB2FE] px-1 font-bold rounded-sm text-[0.6rem] text-white absolute -top-2 -right-1">
                {2}
              </div>
            </button>
            <button>
              <div className="bg-[#E0E2E7] mx-2 h-6 w-6 rounded-full" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 md:border-l pl-2">
            <div className="relative">
              <button className="bg-[#E0E2E7] mx-2 h-8 w-8 rounded-full" />
              <span className=" absolute -bottom-[0.1rem] right-2 bg-[#22CAAD] text-white text-xs py-[0.3rem] px-[0.3rem] rounded-full leading-3 border-[2px] border-white" />
            </div>
            <div className="md:block hidden">
              <div className="text-sm ">Jenil Patel</div>
              <div className="text-xs">Manager</div>
            </div>
            <button>
              <ArrowDownIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
