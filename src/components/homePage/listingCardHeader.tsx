"use client";

import React, { useState } from "react";

type Props = {
  imgSrc: string | string[];
  hostSrc: string;
};

const ListingHeader = (props: Props) => {
  // logic for handling like and unlike
  const [like, setLike] = useState(false);

  const toggleLikeAndUnlike = () => {
    setLike(!like);
  };

  // logic for switching images on listing card
  const [imgIndex, setImgIndex] = useState(0);

  const handleClickNextBtn = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % props.imgSrc.length);
  };

  const handleClickPrevBtn = () => {
    setImgIndex((prevIndex) => (prevIndex - 1) % props.imgSrc.length);
  };

  return (
    <div className="group relative bg-inherit flex flex-col items-center justify-between bg-cover bg-center mb-3 min-h-[270px] max-h-[460px] cursor-pointer tap-transparent">
      {/* bg-image */}
      <img
        alt="bg-image"
        src={props.imgSrc[imgIndex]}
        className="w-full min-h-[270px] max-h-[460px] bg-gray-200 object-cover relative mix-blend-overlay rounded-[12px]"
      />

      {/* left arrow */}
      <button
        onClick={handleClickPrevBtn}
        disabled={imgIndex === 0}
        className={`${
          imgIndex === 0 ? "group-hover:hidden" : ""
        } hidden group-hover:flex hover:scale-[1.1]  bg-white absolute top-1/2 left-3  h-[28px] py-[8px] px-[8px] rounded-full cursor-pointer tap-transparent`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="block fill-none h-3 w-3 stroke-[#222222] stroke-[4px] overflow-visible"
        >
          <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
        </svg>
      </button>

      {/* right arrow */}
      <button
        onClick={handleClickNextBtn}
        disabled={imgIndex === 4}
        className={`${
          imgIndex === 4 ? "group-hover:hidden" : ""
        }  hidden group-hover:flex hover:scale-[1.1] bg-white  absolute top-1/2  right-3  h-[28px] py-[8px] px-[8px] rounded-full cursor-pointer tap-transparent`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="block fill-none h-3 w-3 stroke-[#222222] stroke-[4px] overflow-visible"
        >
          <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
        </svg>
      </button>

      {/* love/like */}
      <button
        onClick={toggleLikeAndUnlike}
        className="absolute top-5 right-5 self-end cursor-pointer tap-transparent"
      >
        {!like ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block fill-[#00000080] h-6 w-6 stroke-[#FFFFFF] stroke-[2px] overflow-visible"
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block fill-red-500 h-6 w-6 stroke-[#FFFFFF] stroke-[2px] overflow-visible"
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        )}
      </button>

      {/* host */}
      <div className="absolute left-[14px] bottom-4 bg-gray-200 w-[64px] h-[72px] bg-[#00004] flex items-center justify-center rounded-r-xl cursor-pointer  tap-transparent">
        <img
          src={props.hostSrc}
          alt="host logo"
          className="h-[40px] w-[40px] bg-inherit rounded-full cursor-pointer"
        />
      </div>

      <ul className="absolute bottom-5 flex gap-2 cursor-pointer tap-transparent">
        <li className="w-[10px] h-[10px] border-[2px] border-[#dad4d4] hover:border-white rounded-lg bg-[#dad4d4] hover:bg-white "></li>
        <li className="w-[10px] h-[10px] border-[2px] border-[#dad4d4] hover:border-white rounded-lg bg-[#dad4d4] hover:bg-white "></li>
        <li className="w-[10px] h-[10px] border-[2px] border-[#dad4d4] hover:border-white rounded-lg bg-[#dad4d4] hover:bg-white "></li>
        <li className="w-[10px] h-[10px] border-[2px] border-[#dad4d4] hover:border-white rounded-lg bg-[#dad4d4] hover:bg-white "></li>
        <li className="w-[10px] h-[10px] border-[2px] border-[#dad4d4] hover:border-white rounded-lg bg-[#dad4d4] hover:bg-white "></li>
      </ul>
    </div>
  );
};

export default ListingHeader;
