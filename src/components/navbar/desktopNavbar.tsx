import React from "react";
import Image from "next/image";

const DesktopNavbar = () => {
  return (
    <div className="relative z-20 bg-white w-full mx-auto px-6 md:px-10 2xl:px-20 h-[80px] hidden md:flex items-center justify-between cursor-pointer border-b-[1px] border-[#0000006] tap-transparent ">
      <div className="flex items-center md:gap-[19px] md:justify-start lg:gap-32 xl:gap-96 2xl:gap-[575px] lg:justify-between">
        {/* needed to group airbnb and anywhere together */}
        <div className="hidden md:flex gap-[6px] items-center">
          <Image
            className=""
            src="/assets/airbnb-logo.png"
            alt=""
            width={30}
            height={34}
          />
          <Image
            // className="flex pb-[2px]"
            className="hidden lg:flex pb-[2px]"
            src="/assets/airbnb-text.jpg"
            alt=""
            width={65}
            height={34}
          />
        </div>

        <div className="h-12 hidden md:flex items-center justify-center text-sm font-bold rounded-[40px] border-[1px] border-[#ededed] pl-[16px] pr-[10px] shadow-md shadow-[#0000000d] hover:shadow-[#00000014]">
          <p className="px-4 text-[#222222]">Anywhere</p>
          <p className="px-4 text-[#222222] border-x-[2px] ">Any week</p>
          <p className="px-4 text-[#717171] font-normal ">Add guests</p>
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
      </div>

      <div className="hidden md:flex h-[42px] items-center">
        <p className="relative left-[8px] text-[#222222] text-sm font-bold bg-[inherit] hover:bg-[#00000008] px-[15px] py-3 rounded-[22px]">
          Airbnb your home
        </p>

        <div className="bg-[inherit] hover:bg-[#00000008] py-[15px] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="mx-4 block h-[14px] w-[14px] fill-black"
          >
            <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
          </svg>
        </div>

        <div className="h-[44px] ml-1 flex items-center justify-center rounded-[40px] border-[1px] border-[#ededed] p-[5px] pl-[12px] shadow-md shadow-[#0000000d] hover:shadow-[#00000014]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block fill-none h-[16px] w-[16px] stroke-[#000000] stroke-[3px] overflow-visible"
          >
            <g fill="none">
              <path d="M2 16h28M2 24h28M2 8h28"></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="ml-3 block fill-[#717171] h-[30px] w-[30px]"
          >
            <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
