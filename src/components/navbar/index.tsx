import React from "react";
import FilterLists from "./filterLists";
import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0">
      <div className="border-none sm:border-b-[1px] border-[#ededed] ">
        {/* mobile nav bar */}
        <MobileNavbar />

        {/* <div className="w-full mx-auto max-w-[1320px] px-6 sm:px-10 xl:px-0 h-[80px] flex items-center justify-between"> */}
        <DesktopNavbar />
      </div>

      {/* <div className="flex w-full mx-auto max-w-[1320px] px-6 sm:px-10 xl:px-0 gap-5"> */}
      <FilterLists />
    </div>
  );
};

export default Navbar;
