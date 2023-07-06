import React from "react";
import ImageSlider from "./slider";

const AirbnbLists = () => {
  return (
    <div className="grid items-center justify-between gap-[18px] 2xl:gap-5 2xl:grid-rows-3 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-5 3xl:grid-cols-6 cursor-pointer ">
      {[
        {
          id: 1,
          images: [
            "https://a0.muscache.com/im/pictures/fedfd719-db8e-4c1c-aef6-f89ae0703cbb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/42765c15-00bd-443b-9111-c13336bc2665.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720",
          ],
          imgSrc:
            "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240",
          location: "5 bedroom Duplex, Banana Island",
          rating: "4.85",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Aug 11",
          dateTo: "18",
          price: "118",
        },
        {
          id: 2,
          imgSrc:
            "https://a0.muscache.com/im/pictures/fedfd719-db8e-4c1c-aef6-f89ae0703cbb.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/3816a6ef-5cc9-40ed-ae47-406646daa103.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.92",
          number: "7,235",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Nov 18",
          dateTo: "23",
          price: "119",
        },
        {
          id: 3,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/a910392f-02d4-4ed0-96a9-52d6ee997cc1.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "9,527",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 30",
          dateTo: "Aug 4",
          price: "89",
        },
        {
          id: 4,
          imgSrc:
            "https://a0.muscache.com/im/pictures/42765c15-00bd-443b-9111-c13336bc2665.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/f7c1bf25-b192-4568-9c13-133c374b2b1f.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.88",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Aug 20",
          dateTo: "25",
          price: "374",
        },
        {
          id: 5,
          imgSrc:
            "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/0ab69fcf-c6fa-4cd4-a272-8755b6e88d7c.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.86",
          number: "4,672",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Oct 21",
          dateTo: "26",
          price: "590",
        },
        {
          id: 6,
          imgSrc:
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-34444025/original/cae4b265-0ab6-4993-9eef-0274b187b116.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/82130759-fbba-4012-ac60-51d5b0e4801e.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Oct 15",
          dateTo: "20",
          price: "433",
        },
        {
          id: 7,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/e7496a4a-3cac-444f-8858-15bff633bd42.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/2fc5b633-2583-4eea-8908-a12f38bb47a5.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.99",
          number: "15,495",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 23",
          dateTo: "28",
          price: "266",
        },
        {
          id: 8,
          imgSrc:
            "https://a0.muscache.com/im/pictures/fedfd719-db8e-4c1c-aef6-f89ae0703cbb.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/7fb0732b-4fd1-44cf-8600-46deb28ce3cd.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },

        {
          id: 9,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/e7496a4a-3cac-444f-8858-15bff633bd42.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/63f2c383-900f-4c0a-a834-2f8ff941c8a1.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 10,
          imgSrc:
            "https://a0.muscache.com/im/pictures/8daeb070-e9f1-40f1-a0c2-fb90682483d3.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/User-446553430/original/a853d570-7c29-4e26-b38c-b15c2f89d9e7.jpeg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 11,
          imgSrc:
            "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/5bd8b657-4daa-49f2-8a6e-7891bf32972b.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 12,
          imgSrc:
            "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/f9edeea8-4f4b-44e3-bf06-981455370526.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 13,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/a48c28b3-cafc-4ee1-ac52-e089e34baeda.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 14,
          imgSrc:
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-616473242380750899/original/69d9953b-f58b-4942-8374-d856c1d26cd8.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/acd97bc9-42f7-45cf-84d4-076add17e41a.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 15,
          imgSrc:
            "https://a0.muscache.com/im/pictures/8daeb070-e9f1-40f1-a0c2-fb90682483d3.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/7869c2e8-590b-48fa-9f7b-25dfb6c9fd8c.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 16,
          imgSrc:
            "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/53900ca1-8067-4614-8b72-6b647912c723.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 17,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-44970955/original/2d032ffa-935c-49e2-bc03-76982a16c521.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/a3cff619-b5df-4cd7-8b0d-637190dd063c.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 18,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-53630298/original/fc04d5cb-0ae4-4d42-a886-8e4e91048b5a.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/6413c7cd-5f57-4a4c-bed3-591877060c98.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 19,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-782039003194543745/original/729eb33b-d5fd-4821-a3c3-f3e4036090c9.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/7869c2e8-590b-48fa-9f7b-25dfb6c9fd8c.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 20,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/e02c91fd-4792-4639-aac2-dee9a0360153.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 21,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-44970955/original/2d032ffa-935c-49e2-bc03-76982a16c521.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/90abdbf1-d85d-41aa-a88f-667df4bcee33.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 22,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-53630298/original/fc04d5cb-0ae4-4d42-a886-8e4e91048b5a.jpeg?im_w=720",
          hostSrc:
            "          https://a0.muscache.com/im/pictures/user/User-119194663/original/8eadc3b1-7d24-4a5a-8854-867636771539.jpeg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 23,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-782039003194543745/original/729eb33b-d5fd-4821-a3c3-f3e4036090c9.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/4bb8ef84-d0c5-482f-a1be-d9f78fee2020.jpg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 24,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/User-134971356/original/0e169919-073f-4671-bdf7-6b9a474d3310.jpeg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
        {
          id: 25,
          imgSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-44970955/original/2d032ffa-935c-49e2-bc03-76982a16c521.jpeg?im_w=720",
          hostSrc:
            "https://a0.muscache.com/im/pictures/user/User-457157525/original/e104f4d6-af54-4e45-8df5-24b54c6ba453.jpeg?im_w=720",
          location: "Sau Paulo, Brazil",
          rating: "4.8",
          number: "43,682",
          // hostOccupation: "Entrepreneur",
          dateFrom: "Jul 29",
          dateTo: "Aug 3",
          price: "33",
        },
      ].map((i) => (
        <div
          key={i.id}
          className="w-full sm:w-[auto] max-w-[370px] h-[auto] flex flex-col mb-[16px]"
        >
          <div className="relative mb-3 max-h-[460px]">
            <div className="absolute w-full h-full flex items-center justify-center px-3 my-auto ">
              {/* left arrow */}
              <div className="bg-white absolute left-4 h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block fill-none h-3 w-3 stroke-[#222222] stroke-[2px] overflow-visible"
                >
                  <path
                    fill="none"
                    d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                  ></path>
                </svg>
              </div>

              {/* right arrow */}
              <div className="bg-white absolute right-4 flex h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block fill-none h-3 w-3 stroke-[#222222] stroke-[2px] overflow-visible"
                >
                  <path
                    fill="none"
                    d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
                  ></path>
                </svg>
              </div>

              {/* love/like */}
              <div className="absolute right-[21px] top-[18px]">
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
              </div>

              {/* host */}
              <div className="absolute left-3 bottom-3 w-[64px] h-[72px] bg-white flex items-center justify-center rounded-r-xl ">
                <img
                  src={i.hostSrc}
                  alt="host logo"
                  className="h-[40px] w-[40px] bg-red-500 rounded-full "
                />
              </div>

              <div className="absolute bottom-0 text-white font-bold">
                <h1>* * * * * *</h1>
              </div>
            </div>

            <img
              alt=""
              src={i.imgSrc}
              className="rounded-[12px] min-h-[256px] max-h-[460px] bg-teal-200 "
            />
          </div>
          <div className="text-[15px] text-[#222222]">
            <p className="flex items-center justify-between text-ellipsis overflow-clip font-semibold">
              {i.location}{" "}
              <span className="flex items-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block h-3 w-3 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                  ></path>
                </svg>{" "}
                {i.rating}
              </span>
            </p>
            <div className="flex flex-col leading-[21px] ">
              <p className="flex flex-wrap overflow-hidden text-ellipsis text-[#717171]">
                Viewed {i.number}
                <span className="ml-1">times last week</span>
              </p>
              <p className="overflow-clip text-[#717171]">
                {i.dateFrom} - {i.dateTo}
              </p>
            </div>
            <p className="mt-[6px] font-semibold  ">
              ${i.price} <span className="font-normal">night</span>{" "}
            </p>
          </div>
        </div>
      ))}

      {/* <ImageSlider /> */}
    </div>
  );
};

export default AirbnbLists;
