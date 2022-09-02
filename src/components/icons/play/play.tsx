import React from "react";

interface IIconProp {
  className?: string;
  props?: any;
}

const Play = ({ className, props }: IIconProp) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.3213 8.13039L0.702209 0.844757L0.702209 15.416L13.3213 8.13039Z"
        fill="black"
      />
    </svg>
  );
};

export default Play;
