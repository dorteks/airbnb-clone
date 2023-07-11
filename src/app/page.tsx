import React from "react";
import RootLayout from "./layout";
import AirbnbLists from "@/components/homePage/airbnbLists";

const HomePage = () => {
  return (
    <RootLayout>
      <AirbnbLists />
    </RootLayout>
  );
};

export default HomePage;
