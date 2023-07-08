import React from "react";
import ListingHeader from "./listingCardHeader";
import ListingCardText from "./listingCardText";
import { ListingCardData } from "../mockData/listingCardData";

const AirbnbLists = () => {
  return (
    <div className="grid items-center justify-between gap-[18px] 2xl:gap-5 2xl:grid-rows-3 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-5 3xl:grid-cols-6">
      {ListingCardData.map((i) => (
        <div
          key={i.id}
          className="w-[270px] max-w-[420px] sm:w-[auto] h-[auto] flex flex-col mb-[16px]"
        >
          <ListingHeader hostSrc={i.hostSrc} imgSrc={i.imgSrc} />
          <ListingCardText
            location={i.location}
            rating={i.rating}
            hostName={i.hostName}
            nights={i.nights}
            dateFrom={i.dateFrom}
            dateTo={i.dateTo}
            price={i.price}
            occupation={i.occupation}
          />
        </div>
      ))}
    </div>
  );
};

export default AirbnbLists;
