import React from "react";

const Mobile = () => {
  return (
    <div className="flex flex-col gap-9">
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
