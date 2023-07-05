import React from "react";

const Desktop = () => {
  return (
    <div className="h-[49px] border-t-[1px] border-[#dddddd] py-3 px-10 xl:px-20 2xl:px-20 hidden md:flex flex-row items-center md:justify-center lg:justify-between flex-wrap gap-10 text-[#222222] text-sm">
      <div className="flex font-light gap-4 ">
        <span>&copy; 2023 Airbnb, Inc.</span>

        <ul className="flex flex-row gap-4 flex-wrap ">
          {[
            { id: 1, text: "Terms" },
            { id: 2, text: "Sitemap" },
            { id: 3, text: "Privacy" },
            { id: 4, text: "Your Privacy Choices" },
            { id: 5, text: "Destinations" },
          ].map((i) => (
            <li key={i.id} className="hover:underline cursor-pointer">
              {i.text}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex gap-5 font-[cereal-medium] ">
        {[
          { id: 1, text: "English (US)" },
          { id: 2, text: "$ USD" },
          { id: 3, text: "Support & Resources" },
        ].map((i) => (
          <li key={i.id}>{i.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Desktop;
