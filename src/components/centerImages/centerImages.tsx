import React from 'react';
import {
  Container,
  RightBox,
  FirstImage,
  SecondImage,
  Title,
  SubTitle,
  LeftBox,
  ImageBox,
  Box,
} from './style';

interface ICenterImageProp {
  title: string;
  subTitle: string;
}

const CenterImage = ({ title, subTitle }: ICenterImageProp) => {
  return (
    <Box>
      <Container>
        <LeftBox>
          <ImageBox>
            <FirstImage src="./image8.svg" alt={'Alt'} />
            <SecondImage src="./image81.svg" alt={'Alt'} />
          </ImageBox>
        </LeftBox>
        <RightBox>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </RightBox>
      </Container>
    </Box>
  );
};

export default CenterImage;
