import React from 'react';
import { Image } from './styles';

interface ICloudImageProps {
  image: string;
}

const CloudImage = ({ image }: ICloudImageProps) => {
  return <Image src={image} alt={'error'} />;
};

export default CloudImage;
