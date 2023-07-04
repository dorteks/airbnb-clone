import React from "react";

const Mobile = () => {
  return (
    <div className="border-t-[1px] border-[#ebebeb] h-[64px] py-3 px-10 flex md:hidden items-center justify-center gap-16 sm:gap-28 ">
      {[
        { id: 1, icon: "", text: "1" },
        { id: 2, icon: "", text: "2" },
        { id: 3, icon: "", text: "3" },
      ].map((i) => (
        <div key={i.id}>{i.text}</div>
      ))}
    </div>
  );
};

export default Mobile;
