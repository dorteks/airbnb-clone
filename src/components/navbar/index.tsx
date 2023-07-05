import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0">
      <div className="border-none sm:border-b-[1px] border-[#ededed] ">
        {/* mobile nav bar */}
        <div className="w-full mx-auto px-6 h-[70px] flex md:hidden pt-[14px] justify-between">
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

        {/* <div className="w-full mx-auto max-w-[1320px] px-6 sm:px-10 xl:px-0 h-[80px] flex items-center justify-between"> */}
        <div className="w-full mx-auto px-6 md:px-10 2xl:px-20 h-[80px] hidden md:flex items-center justify-between">
          <div className="flex items-center md:gap-8 md:justify-start lg:gap-36 xl:gap-96 2xl:gap-[575px] lg:justify-between ">
            {/* needed to group airbnb and anywhere together */}
            <div className="hidden md:flex gap-[6px] items-center ">
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
                src="/assets/airbnb-text.png"
                alt=""
                width={65}
                height={34}
              />
            </div>

            {/* work on the responsiveness */}
            {/* md - 640px */}
            <div className="h-12 hidden md:flex items-center justify-center text-sm font-bold rounded-[40px] border-[1px] border-[#ededed] pl-[16px] pr-[10px] ">
              <p className="px-4 text-[#222222]">Anywhere</p>
              <p className="px-4 text-[#222222]">Any week</p>
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

          <div className="hidden md:flex h-[42px] items-center ">
            <p className="text-[#222222] text-sm font-bold mx-2">
              Airbnb your home
            </p>
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

            <div className="h-[44px] flex items-center justify-center rounded-[40px] border-[1px] border-[#ededed] p-[5px] pl-[12px]">
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
      </div>

      {/* <div className="flex w-full mx-auto max-w-[1320px] px-6 sm:px-10 xl:px-0 gap-5"> */}
      <div className="flex w-full mx-auto px-6 md:px-10 2xl:px-20 items-center gap-5 border-b-[1px] md:border-none border-[#ededed]">
        <div className="overflow-hidden mt-0 md:mt-5 h-[74px] md:h-[78px] top-[80px] flex items-center gap-[36px]">
          <h1 className="hidden md:flex">A</h1>
          <h1 className="hidden md:flex">A</h1>
          {[
            {
              id: 1,
              icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
              text: "Rooms",
            },
            {
              id: 2,
              icon: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
              text: "Amazing pools",
            },
            {
              id: 3,
              icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
              text: "Trending",
            },
            {
              id: 4,
              icon: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
              text: "Luxe ",
            },
            {
              id: 5,
              icon: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
              text: "Countryside ",
            },
            {
              id: 6,
              icon: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
              text: "Towers ",
            },
            {
              id: 7,
              icon: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
              text: "Amazing Views ",
            },
            {
              id: 8,
              icon: "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
              text: "Cycladic homes ",
            },
            {
              id: 9,
              icon: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
              text: "Iconic cities ",
            },
            {
              id: 10,
              icon: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
              text: "Vineyards ",
            },
            {
              id: 11,
              icon: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
              text: "Bed & Breakfast",
            },
            {
              id: 12,
              icon: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
              text: "OMG!",
            },
            {
              id: 13,
              icon: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
              text: "Grand pianos",
            },
            {
              id: 14,
              icon: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
              text: "Minsus",
            },
            {
              id: 15,
              icon: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
              text: "Chef's kitchens",
            },
            {
              id: 16,
              icon: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
              text: "Historical homes",
            },
            {
              id: 17,
              icon: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
              text: "Windmills",
            },
            {
              id: 18,
              icon: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
              text: "Tree houses",
            },
            {
              id: 19,
              icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
              text: "A frame",
            },
            {
              id: 20,
              icon: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
              text: "Top of the world",
            },
          ].map((i) => (
            <div
              key={i.id}
              className="flex flex-col items-center justify-center flex-grow cursor-pointer text-[#717171] hover:text-[#000000] py-0 md:py-[16px] border-b-[2px] border-[white] hover:border-[#ededed]  "
            >
              <Image src={""} alt="icon" width={24} height={24} />
              <h4 className="text-xs font-medium">{i.text}</h4>
            </div>
          ))}
        </div>
        <button className="hidden md:flex py-2 min-w-[91px] h-[48px] items-center bg-[#00000000] border-[1px] border-[#dddddd] rounded-[12px] text-xs font-extrabold ">
          <div className="flex px-4 py-[1px] gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-[14px] w-[14px] currentcolor;"
            >
              <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
            <p>Filters</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
