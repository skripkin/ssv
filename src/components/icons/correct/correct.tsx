import React from "react";
import { IconSvg } from "../styles"


interface IIconProp {
  className?: string;
  props?: any;
}

const Correct = ({ className, props }: IIconProp) => {
  return (
    <IconSvg
      width="116"
      height="115"
      viewBox="0 0 116 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="0.580078"
        y="0.160156"
        width="114.84"
        height="114.84"
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
          id="image0_401_0"
          width="512"
          height="512"
        />
      </defs>
    </IconSvg>
  );
};

export default Correct;
