"use client";

import React, { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center justify-center pt-[14px] py-3 mb-[13px]">
      <div className="w-full lg:w-[690px] 2xl:w-[568px] p-4 flex items-center justify-between text-[15px] rounded-[12px] border-[1px] border-[#dddddd]">
        <div className="flex flex-col md:flex-row md:gap-4 leading-[18px] ">
          <p className="text-[#222222] font-bold ">Display total price</p>
          <p className="text-[#717171] ">includes all fees, before taxes</p>
        </div>
        <button className="relative rounded-full w-[52px] h-8 border-[2px] flex items-center justify-center ">
          <div
            onClick={handleONNavigation}
            className={`${
              ONIsNavigated
                ? "w-[15px] ml-[2px] bg-white text-white rounded-full px-3 absolute left-0 z-20"
                : "w-[15px] ml-[2px] bg-[#717171] text-[#717171] rounded-full px-3 absolute left-0 z-20"
            }`}
          >
            A
          </div>
          <div
            onClick={handleOFFNavigation}
            className={`${
              OFFIsNavigated
                ? "w-[15px] mr-[2px] bg-white text-white rounded-full px-3 absolute right-0"
                : "w-[15px] mr-[2px] bg-[#717171] text-[#717171] rounded-full px-3 absolute right-0 z-20"
            }`}
          >
            B
          </div>
        </button>
      </div>
    </div>
  );
};

export default PriceDisplay;
