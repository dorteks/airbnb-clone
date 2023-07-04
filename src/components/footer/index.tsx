import React from "react";
import Mobile from "./mobile";
import Desktop from "./desktop";

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0">
      <Mobile />
      <Desktop />
    </div>
  );
};

export default Footer;
