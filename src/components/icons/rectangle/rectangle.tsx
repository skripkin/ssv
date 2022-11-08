import React from 'react';
import { IconSvg } from '../styles';

interface IIconProp {
  className?: string;
  props?: any;
}

const Rectangle = ({ className, props }: IIconProp) => {
  return (
    <IconSvg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.419922"
        y="-0.34375"
        width="26.036"
        height="28.754"
        fill="black"
      />
    </IconSvg>
  );
};

export default Rectangle;
