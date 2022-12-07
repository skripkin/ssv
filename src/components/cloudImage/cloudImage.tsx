import React from 'react';
import { Image, Container } from './styles';

interface ICloudImageProps {
  image: string;
}

const CloudImage = ({ image }: ICloudImageProps) => {
  return (
    <Container>
      <Image src={image} alt={'error'} />
    </Container>
  );
};

export default CloudImage;
