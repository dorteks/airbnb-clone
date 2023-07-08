"use client";

import React, { useState } from "react";

const Mobile = () => {
  const [map, setMap] = useState(false);

  const toggleMap = () => {
    setMap(!map);
  };

  return (
    <div className="flex flex-col gap-9">
      {!map ? (
        <div className="flex absolute bottom-24 md:hidden self-center text-[#FFFFFF] bg-[#000000] w-auto rounded-full tap-transparent">
          <button
            onClick={toggleMap}
            className="flex gap-2 items-center justify-center px-5 py-[11px] text-sm font-semibold "
          >
            Map
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
        <div className="flex absolute bottom-24 md:hidden self-center text-[#FFFFFF] bg-[#000000] w-auto rounded-full tap-transparent">
          <button
            onClick={toggleMap}
            className="flex gap-2 items-center justify-center px-5 py-[11px] text-sm font-semibold "
          >
            List
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

      <div className="relative bg-white z-20  border-t-[1px] border-[#ebebeb] h-[64px] py-3 px-10 flex md:hidden items-center justify-center gap-16 sm:gap-28 ">
        {[
          {
            id: 1,
            path: "M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9",
            text: "Explore",
          },
          {
            id: 2,
            path: "M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z",
            text: "Wishlists",
          },
          {
            id: 3,
            path: "M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 8a5 5 0 0 0-2 9.58v2.1l-.15.03a11 11 0 0 0-6.94 4.59C9.26 27.59 12.46 29 16 29s6.74-1.41 9.09-3.7a11 11 0 0 0-6.93-4.59l-.16-.03v-2.1a5 5 0 0 0 3-4.35V14a5 5 0 0 0-5-5zm0-6A13 13 0 0 0 5.56 23.75a13.02 13.02 0 0 1 5.54-4.3l.35-.13-.02-.02A7 7 0 0 1 9 14.27L9 14a7 7 0 1 1 11.78 5.12l-.23.2.04.02c2.33.88 4.36 2.41 5.85 4.4A13 13 0 0 0 16 3z",
            text: "Login",
          },
        ].map((i) => (
          <div
            key={i.id}
            className="flex flex-col gap-[2px] items-center justify-center"
          >
            <svg
              xmlns={""}
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-none h-6 w-6 stroke-[#717171] overflow-visible"
            >
              <path fill="none" d={i.path}></path>
            </svg>
            <p className="text-[#717171] text-[10px] ">{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
