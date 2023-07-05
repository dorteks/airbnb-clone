import React from "react";
import RootLayout from "./layout";
import PriceDisplay from "@/components/homePage/priceDisplay";
import AirbnbLists from "@/components/homePage/airbnbLists";

const HomePage = () => {
  return (
    <RootLayout>
      <PriceDisplay />
      <AirbnbLists />
    </RootLayout>
  );
};

export default HomePage;
