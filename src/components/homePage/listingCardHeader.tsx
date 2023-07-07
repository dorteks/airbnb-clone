"use client";

import React, { useState } from "react";

type Props = {
  imgSrc: string;
  hostSrc: string;
};

const images = [
  "https://a0.muscache.com/im/pictures/fedfd719-db8e-4c1c-aef6-f89ae0703cbb.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/42765c15-00bd-443b-9111-c13336bc2665.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720",
];

const ListingHeader = (props: Props) => {
  // logic for handling like and unlike
  const [like, setLike] = useState(false);

  const toggleLikeAndUnlike = () => {
    setLike(!like);
  };

  // logic for switching images on listing card
  const [imgIndex, setImgIndex] = useState(0);

  const handleClickNextBtn = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("clicked Next");
  };

  const handleClickPrevBtn = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("clicked Prev");
  };

  return (
    <div className="relative mb-3 max-h-[460px]">
      <div className="absolute w-full h-full flex items-center justify-center px-3 my-auto ">
        {/* left arrow */}
        <div
          onClick={handleClickPrevBtn}
          className="bg-white absolute left-4 h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full  "
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

        {/* right arrow */}
        <div
          onClick={handleClickNextBtn}
          className="bg-white absolute right-4 flex h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full  "
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

        {/* love/like */}
        <div
          onClick={toggleLikeAndUnlike}
          className="absolute right-[20px] top-[20px]"
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
        </div>

        {/* host */}
        <div className="absolute left-3 bottom-3 w-[64px] h-[72px] bg-white flex items-center justify-center rounded-r-xl ">
          <img
            src={props.hostSrc}
            alt="host logo"
            className="h-[40px] w-[40px] rounded-full "
          />
        </div>

        <div className="absolute bottom-0 text-white font-bold">
          <h1>* * * * * *</h1>
        </div>
      </div>

      <img
        alt=""
        src={props.imgSrc}
        // src={images[imgIndex]}
        className="rounded-[12px] min-h-[256px] max-h-[460px] bg-teal-200 "
      />
    </div>
  );
};

export default ListingHeader;
