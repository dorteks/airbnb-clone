"use client";

import React, { useState } from "react";

const PriceDisplay = () => {
  const [hasNavigated, setHasNavigated] = useState(false);
  const [ONIsNavigated, setONIsNavigated] = useState(true);
  const [OFFIsNavigated, setOFFIsNavigated] = useState(false);

  const handleONNavigation = (e: any) => {
    e.preventDefault();
    setHasNavigated(true);
    setONIsNavigated(!ONIsNavigated);
    setOFFIsNavigated(!OFFIsNavigated);
    console.log("switched off");
  };

  const handleOFFNavigation = (e: any) => {
    e.preventDefault();
    setHasNavigated(true);
    setONIsNavigated(!ONIsNavigated);
    setOFFIsNavigated(!OFFIsNavigated);
    console.log("switched on");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[14px] py-3 mb-[13px] tap-transparent">
      <div className="w-full lg:w-[690px] 2xl:w-[568px] p-4 flex items-center justify-between text-[15px] rounded-[12px] border-[1px] border-[#dddddd]">
        <div className="flex flex-col md:flex-row md:gap-4 leading-[18px] ">
          <p className="text-[#222222] font-bold pr-0 sm:pr-4 border-r-0 md:border-r-[2px] border-[#ededed]  ">
            Display total price
          </p>
          <p className="text-[#717171] ">includes all fees, before taxes</p>
        </div>
        <button
          className={`${
            ONIsNavigated
              ? "relative bg-[#717171] rounded-full w-[56px] h-9 border-[2px] flex items-center justify-center"
              : "relative bg-black rounded-full w-[56px] h-9 border-[2px] flex items-center justify-center "
          }`}
        >
          <div
            onClick={handleONNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] ml-[3px] bg-white text-white rounded-full px-[13px] py-[2px] absolute left-0 z-20"
                : "w-[15px] ml-[3px] bg-[#222222]  text-[#222222] rounded-full px-[13px] py-[2px] absolute left-0"
            }`}
          >
            X
          </div>
          <div
            onClick={handleOFFNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] mr-[3px] bg-[#717171]  text-[#717171] rounded-full px-[13px] py-[2px] absolute right-0 "
                : "w-[15px] mr-[3px] bg-white text-[#717171] rounded-full px-[14px] absolute right-0 z-20"
            }`}
          >
            <div className="relative -left-4 px-[10px] py-[8px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className={`${
                  ONIsNavigated ? "stroke-red" : "stroke-black"
                } block fill-none h-3 w-3  stroke-[5px] overflow-visible  `}
              >
                <path fill="none" d="m4 16.5 8 8 16-16"></path>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PriceDisplay;
