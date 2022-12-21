import React from 'react';
import { Image, Container, ContainerImg } from './styles';

interface ICloudImageProps {
  image: string;
}

const CloudImage = ({ image }: ICloudImageProps) => {
  return (
    <ContainerImg>
      <Container>
        <Image src={image} alt={'error'} />
      </Container>
    </ContainerImg>
  );
};

export default CloudImage;
