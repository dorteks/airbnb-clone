import React from "react";
import FilterLists from "./filterLists";
import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0">
      <div className="border-none sm:border-b-[1px] border-[#ededed] ">
        <MobileNavbar />
        <DesktopNavbar />
      </div>

      <FilterLists />
    </div>
  );
};

export default Navbar;
