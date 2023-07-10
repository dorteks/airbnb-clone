import React from "react";

type Props = {
  disabled: boolean;
  onClick: any;
};

const LeftNav = React.memo((props: Props) => {
  return (
    <button
      type="button"
      className="bg-white absolute z-20 top-1/2 left-3 h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full cursor-pointer tap-transparent "
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label="Previous Slide"
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
      </svg>{" "}
    </button>
  );
});

LeftNav.displayName = "LeftNav";

export default LeftNav;
