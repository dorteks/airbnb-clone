import React from "react";

type Props = {
  location: string;
  rating: string;
  hostName: string;
  occupation: string;
  nights: string;
  dateFrom: string;
  dateTo: string;
  price: string;
};

const ListingCardText = (props: Props) => {
  return (
    <div className="text-[15px] text-[#222222] cursor-pointer tap-transparent">
      <div className="flex items-center justify-between font-semibold">
        <p className="truncate">{props.location} </p>
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
          {props.rating}
        </span>
      </div>
      <div className="flex flex-col leading-[21px] ">
        <p className="flex flex-wrap overflow-hidden text-ellipsis text-[#717171]">
          Stay with {props.hostName}
          <li className="ml-2  list-disc">
            <span className="-ml-2  ">{props.occupation} </span>{" "}
          </li>
        </p>
        <p className="overflow-clip text-[#717171]">
          {props.nights} nights * {props.dateFrom} - {props.dateTo}
        </p>
      </div>
      <p className="mt-[6px] font-semibold  ">
        $ {props.price} <span className="font-normal">night</span>{" "}
      </p>
    </div>
  );
};

export default ListingCardText;
