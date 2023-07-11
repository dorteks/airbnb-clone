import React from "react";

const Desktop = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="relative z-20 bg-white h-auto border-t-[1px] border-[#dddddd] py-3 px-10 md:px-10 xl-px-12 xxl:px-20 2xl:px-20 hidden md:flex flex-row items-center md:justify-center lg:justify-between xl:justify-between flex-wrap gap-[5px] text-[#222222] text-sm">
        <div className="flex font-light gap-4 ">
          <span>&copy; 2023 Airbnb, Inc.</span>

          <ul className="flex gap-4 flex-row flex-wrap ">
            {[
              { id: 1, text: "Terms" },
              { id: 2, text: "Sitemap" },
              { id: 3, text: "Privacy" },
              { id: 4, text: "Your Privacy Choices" },
            ].map((i) => (
              <li
                key={i.id}
                className="flex items-center gap-[6px] hover:underline cursor-pointer"
              >
                <span className="relative ">{i.text}</span>
              </li>
            ))}

            <div className="-ml-2 self-center ">
              <svg width="26" height="12" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="11"
                  rx="5.5"
                  fill="#fff"
                ></rect>
                <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                <path
                  d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                  stroke="#06F"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="11"
                  rx="5.5"
                  stroke="#06F"
                ></rect>
              </svg>
            </div>

            <li className="flex items-center gap-[6px] hover:underline cursor-pointer">
              Destinations
            </li>
          </ul>
        </div>

        <ul className="flex font-[cereal-medium] gap-2">
          <li className="flex items-center gap-[6px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-4 w-4 fill-[#222222]"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
            <span className="hover:underline cursor-pointer">English (US)</span>
          </li>

          <li className="flex gap-2">
            <span>$</span>
            <span className="hover:underline cursor-pointer"> USD</span>
          </li>

          <li className="flex items-center gap-[6px] ">
            <span className="hover:underline cursor-pointer">
              Support & Resources
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-none h-4 w-4 stroke-[#222222] stroke-[3px] overflow-visible"
            >
              <path fill="none" d="M4 20 15.3 8.7a1 1 0 0 1 1.4 0L28 20"></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desktop;
