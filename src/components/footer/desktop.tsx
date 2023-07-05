import React from "react";

const Desktop = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="hidden md:flex self-center text-[#FFFFFF] bg-[#000000] w-auto rounded-full">
        <button className="flex gap-2 items-center justify-center px-5 py-[14px] text-sm font-semibold ">
          Show Map
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
      <div className="relative z-20 bg-white h-[49px] border-t-[1px] border-[#dddddd] py-3 px-10 xl:px-20 2xl:px-20 hidden md:flex flex-row items-center md:justify-center lg:justify-between flex-wrap gap-10 text-[#222222] text-sm">
        <div className="flex font-light gap-4 ">
          <span>&copy; 2023 Airbnb, Inc.</span>

          <ul className="flex flex-row gap-4 flex-wrap ">
            {[
              { id: 1, text: "Terms" },
              { id: 2, text: "Sitemap" },
              { id: 3, text: "Privacy" },
              { id: 4, text: "Your Privacy Choices" },
              { id: 5, text: "Destinations" },
            ].map((i) => (
              <li key={i.id} className="hover:underline cursor-pointer">
                {i.text}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex gap-5 font-[cereal-medium] ">
          {[
            { id: 1, text: "English (US)" },
            { id: 2, text: "$ USD" },
            { id: 3, text: "Support & Resources" },
          ].map((i) => (
            <li key={i.id}>{i.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Desktop;
