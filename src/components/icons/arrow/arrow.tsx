import React from "react";

interface IIconProp {
  className?: string;
  props?: any;
}

const Arrow = ({ className, props }: IIconProp) => {
  return (
    <svg
      width="15"
      height="38"
      viewBox="0 0 15 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <line
        y1="-1"
        x2="22.0931"
        y2="-1"
        transform="matrix(0.554935 0.831894 0.821189 -0.570656 1.89697 0.511719)"
        stroke="black"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="22.0931"
        y2="-1"
        transform="matrix(0.554935 -0.831894 0.821189 0.570656 1.89697 37.27)"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Arrow;
