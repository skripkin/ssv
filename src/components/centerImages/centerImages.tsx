import React from 'react';
import {
  Container,
  Component,
  FirstImage,
  SecondImage,
  Title,
  SubTitle,
} from './style';

interface ICenterImageProp {
  title: string;
  subTitle: string;
}

const CenterImage = ({ title, subTitle }: ICenterImageProp) => {
  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <FirstImage src="./image8.svg" alt={'Alt'} />
        <SecondImage src="./image81.svg" alt={'Alt'} />
      </div>
      <Component>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Component>
    </Container>
  );
};

export default CenterImage;
