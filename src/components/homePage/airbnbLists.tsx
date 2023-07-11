"use client";

import ShowMap from "./showMap";
import React, { useState } from "react";
import PriceDisplay from "./priceDisplay";
import ListingHeader from "./listingCardHeader";
import ListingCardText from "./listingCardText";
import { ListingCardData } from "../mockData/listingCardData";

const AirbnbLists = () => {
  const [map, displayMap] = useState(false);

  const toggleMap = () => {
    displayMap(!map);
  };

  return (
    <>
      <div className={`${!map ? "flex" : "hidden"} flex justify-center `}>
        <PriceDisplay />
      </div>

      <div className="grid items-center justify-between gap-[18px] 2xl:gap-5 2xl:grid-rows-3 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-5 3xl:grid-cols-6">
        {ListingCardData.map((i) => (
          <div
            key={i.id}
            className={`${
              !map ? "flex" : "hidden"
            } min-w-[270px] max-w-[376px] sm:w-[auto] h-[auto]  flex-col mb-[16px]`}
          >
            <ListingHeader hostSrc={i.hostSrc} imgSrc={i.imgSrc} />

            <ListingCardText
              location={i.location}
              rating={i.rating}
              hostName={i.hostName}
              nights={i.nights}
              dateFrom={i.dateFrom}
              dateTo={i.dateTo}
              price={i.price}
              occupation={i.occupation}
            />
          </div>
        ))}
      </div>
      <div className={`${!map ? "hidden" : "flex"}`}>
        <ShowMap />
      </div>

      {/* toggle showmap & showlist button */}
      {/* <div className="fixed h-[300px] bg-red-500 w-full bottom-0 flex justify-center px-6 md:px-10 xxl:px-20 2xl:px-20 tap-transparent  "> */}
      <div className="flex items-center justify-center tap-transparent">
        <div className=" w-auto fixed bottom-0 right-50 flex justify-center items-center">
          {!map ? (
            <div
              onClick={toggleMap}
              className="flex absolute bottom-20 lg:bottom-[68px] self-center text-[#FFFFFF] bg-[#000000] w-[92px] md:w-[131px] rounded-full"
            >
              <button className="flex gap-2 items-center justify-center px-5 py-[11px] md:py-[14px] text-sm font-semibold cursor-pointer ">
                <p className="hidden md:flex -mr-[2px]">Show</p>
                <p>Map</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block h-4 w-4 fill-[#FFFFFF]"
                >
                  <path d="M31.25 3.75a2.29 2.29 0 0 0-1.01-1.44A2.29 2.29 0 0 0 28.5 2L21 3.67l-10-2L2.5 3.56A2.29 2.29 0 0 0 .7 5.8v21.95a2.28 2.28 0 0 0 1.06 1.94A2.29 2.29 0 0 0 3.5 30L11 28.33l10 2 8.49-1.89a2.29 2.29 0 0 0 1.8-2.24V4.25a2.3 2.3 0 0 0-.06-.5zM12.5 25.98l-1.51-.3L9.5 26H9.5V4.66l1.51-.33 1.49.3v21.34zm10 1.36-1.51.33-1.49-.3V6.02l1.51.3L22.5 6h.01v21.34z"></path>
                </svg>
              </button>
            </div>
          ) : (
            <div
              onClick={toggleMap}
              className="flex absolute bottom-20 lg:bottom-[68px] self-center text-[#FFFFFF] bg-[#000000] w-[92px] md:w-[131px] rounded-full"
            >
              <button className="flex gap-2 items-center justify-center px-5 py-[11px] md:py-[14px] text-sm font-semibold cursor-pointer">
                <p className="hidden md:flex -mr-[2px]">Show</p>
                <p>List</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block h-4 w-4 fill-[#FFFFFF]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 12v2H6v-2h9zM2.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 7v2H6V7h9zM2.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 2v2H6V2h9z"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AirbnbLists;
