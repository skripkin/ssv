import React from "react";
import { IconSvg } from "../styles"


interface IIconProp {
  className?: string;
  props?: any;
}

const Time = ({ className, props }: IIconProp) => {
  return (
    <IconSvg
      className={className}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.555664"
        y="0.947266"
        width="40.59"
        height="40.59"
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
          id="image0_278_130"
          width="29"
          height="29"
        />
      </defs>
    </IconSvg>
  );
};

export default Time;
