import React from 'react';
import { IconSvg } from '../styles';

interface IIconProp {
  className?: string;
  props?: any;
}

const Phone = ({ props }: IIconProp) => {
  return (
    <IconSvg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.621 10.544C6.891 9.811 6.19 9.11 5.456 8.38c-.933-.992-1.105-1.912-.671-2.234l.889-.513a1.163 1.163 0 00.425-1.588L4.765 1.732a1.163 1.163 0 00-1.589-.425l-.889.513c-2.884 1.665.464 7.013 1.864 8.413l1.616 1.616c1.4 1.4 6.748 4.748 8.413 1.864l.513-.89a1.163 1.163 0 00-.425-1.588L11.956 9.9a1.163 1.163 0 00-1.588.425l-.514.89c-.321.433-1.24.26-2.233-.672z"
        fill="#000"
      ></path>
    </IconSvg>
  );
};

export default Phone;
