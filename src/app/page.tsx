import React from "react";
import RootLayout from "./layout";

const HomePage = () => {
  return (
    <RootLayout>
      <>
        <div className="h-12 hidden md:flex items-center justify-center text-sm font-bold rounded-[40px] border-[1px] border-[#ededed] pl-[16px] pr-[10px] ">
          <p className="px-4 text-[#222222]">Anywhere</p>
          <p className="px-4 text-[#222222]">Any week</p>
          <p className="px-4 text-[#717171] ">Add guests</p>
          <div className="rounded-full flex items-center justify-center bg-[#FF385C] h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-none h-[14px] w-[14px] stroke-[#FFFFFF]  stroke-[5px] overflow-visible"
            >
              <path
                fill="none"
                d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
              ></path>
            </svg>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default HomePage;
