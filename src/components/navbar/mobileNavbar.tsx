import React from "react";

const MobileNavbar = () => {
  return (
    <div className="relative z-20 bg-white w-full mx-auto px-6 h-[70px] flex md:hidden pt-[14px] justify-between">
      <div className="w-full h-[54px] flex items-center justify-between text-sm font-extrabold rounded-[40px] border-[1px] border-[#ededed] pl-[16px] pr-[10px] ">
        {/* search button */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="ml-[5px] mr-[16px]  block fill-none h-[14px] w-[14px] stroke-[#222222]  stroke-[5px] overflow-visible"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
          {/* texts */}
          <div className="flex flex-col">
            <p className="text-sm text-[#222222]">Anywhere</p>
            <div className="flex font-thin gap-2 text-xs text-[#717171]">
              <p>Any week</p>
              <p>*</p>
              <p>Add guests</p>
            </div>
          </div>
        </div>

        <div className="rounded-full border-[1px] border-[#dddddd] flex items-center justify-center h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block h-[14px] w-[14px] fill-[#222222] overflow-visible"

            // style="display: block; height: 16px; width: 16px; fill: rgb(34, 34, 34);"
          >
            <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </div>
      </div>{" "}
    </div>
  );
};

export default MobileNavbar;
