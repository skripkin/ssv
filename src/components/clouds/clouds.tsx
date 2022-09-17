import React from "react";
import { Container, Image } from './style';

interface ICloudsProp {
    image: string;
  }
  const Clouds = ({ image }: ICloudsProp) => {
    return (
      <Container>
       <Image src={image}  />
      </Container>
    );
  };
  export default Clouds;
  