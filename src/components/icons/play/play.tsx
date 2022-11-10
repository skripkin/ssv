import React from 'react';
import { IconSvg } from '../styles';

interface IIconProp {
  className?: string;
  props?: any;
}

const Play = ({ className, props }: IIconProp) => {
  return (
    <IconSvg
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.3213 8.13039L0.702209 0.844757L0.702209 15.416L13.3213 8.13039Z"
        fill="black"
      />
    </IconSvg>
  );
};

export default Play;
