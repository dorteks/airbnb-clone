"use client";

import React, { useRef } from "react";

const FilterLists = () => {
  const filterRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    filterRef.current?.scrollBy({
      left: -filterRef.current?.offsetWidth,
      behavior: "smooth",
    });
    console.log("prev clicked");
  };

  const handleNext = () => {
    filterRef.current?.scrollBy({
      left: filterRef.current?.offsetWidth,
      behavior: "smooth",
    });
    console.log("next clicked");
  };

  return (
    <div className="relative bg-white flex w-full mx-auto px-6 md:px-10 2xl:px-20 items-center gap-2 cursor-pointer ">
      {/* border-b-[1px] border-[#ededed] */}
      <div
        ref={filterRef}
        style={{ transform: "translateX(0)" }}
        className="overflow-x-scroll md:overflow-hidden mt-0 md:mt-5 h-[74px] md:h-[78px] top-[80px] flex items-center gap-[34px]"
      >
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
            onClick={() => console.log("Clicked")}
            className="flex flex-wrap gap-[8px] flex-grow items-center justify-center cursor-pointer text-[#717171] hover:text-[#000000] py-0 md:py-[16px] border-b-[5px] border-[white] hover:border-[#00000049]"
          >
            <img alt="icon" width={24} height={24} src={i.icon} className="" />
            <h4 className="text-center text-xs font-medium  whitespace-nowrap ">
              {i.text}
            </h4>
          </div>
        ))}
      </div>

      {/* next button*/}
      <div
        onClick={handleNext}
        // disabled={handleNext === null}
        className="mt-4 hidden md:flex h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full shadow-lg shadow-[inherit] hover:shadow-[#202020]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="block fill-none h-3 w-3 stroke-[#222222] stroke-[2px] overflow-visible"
        >
          <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
        </svg>
      </div>

      {/* prev button */}
      <div
        onClick={handlePrev}
        // disabled={handlePrev === null}
        className="mt-4 hidden md:flex h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full shadow-lg shadow-[inherit] hover:shadow-[#202020]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="block fill-none h-3 w-3 stroke-[#222222] stroke-[2px] overflow-visible"
        >
          <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
        </svg>
      </div>

      <button className="hidden md:flex py-2 min-w-[91px] h-[48px] mt-4 items-center bg-[#00000000] border-[1px] border-[#dddddd] rounded-[12px] text-xs font-extrabold ">
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
  );
};

export default FilterLists;
