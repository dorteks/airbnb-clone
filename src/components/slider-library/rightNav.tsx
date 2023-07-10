import React from "react";

type Props = {
  disabled: boolean;
  onClick: any;
};

const RightNav = React.memo((props: Props) => {
  return (
    <button
      type="button"
      className="bg-white absolute z-20 top-1/2 right-3 h-[28px] p-[7px] border-[1px] border-[#717171] rounded-full cursor-pointer tap-transparent "
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label="Next Slide"
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
      </svg>{" "}
    </button>
  );
});

export default RightNav;
