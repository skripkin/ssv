import React from 'react';
import { IconSvg } from '../styles';

interface IIconProp {
  className?: string;
  props?: any;
}

const Time = ({ className, props }: IIconProp) => {
  return (
    <IconSvg
      className={className}
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <path d="M464.34,256.1C463.15,169.4,410.08,91.78,328.8,60.79,247,29.6,150.46,55.61,95.11,123.3,40,190.66,31.67,287.69,76.54,362.79,121.32,437.73,209.11,476.35,294.61,461c97.49-17.54,167.28-105.12,169.65-202.63C464.32,257.61,464.35,256.87,464.34,256.1ZM314,416.59c-67.8,24.3-144.8,3-190.52-52.58C78.37,309.14,73,229.35,109.28,168.55,145.39,108.13,217.68,75,287.06,88.26c80.68,15.45,138.24,86.25,139.36,167.84C425.44,327.11,381.57,392.37,314,416.59Z" />
      <path d="M236.82,148.11V248.25l-58.64,58.63C160.9,324.16,187.71,351,205,333.7L243.73,295c10.75-10.75,29.4-23.38,31-39.54,3.5-35,0-72.06,0-107.31C274.74,123.71,236.82,123.67,236.82,148.11Z" />
    </IconSvg>
  );
};

export default Time;
