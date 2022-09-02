import React from "react";

interface IIconProp {
  className?: string;
  props?: any;
}

const Youtube = ({ className, props }: IIconProp) => {
  return (
    <svg
      className={className}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.0942383"
        y="0.255371"
        width="50"
        height="50"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
        </pattern>
        <image
          id="image0_297_2371"
          width="50"
          height="50"
        />
      </defs>
    </svg>
  );
};

export default Youtube;
