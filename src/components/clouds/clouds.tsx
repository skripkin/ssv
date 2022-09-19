import React from "react";
import { Image } from './style';

interface ICloudsProp {
    image: string;
  }
  const Clouds = ({ image }: ICloudsProp) => {
    return (
      <Image src={image}/>
    );
  };
  export default Clouds;
  