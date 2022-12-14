import React from 'react';
import {
  Container,
  TextContainer,
  Title,
  SubTitle,
  DataTime,
  Image,
  ImageWrapper,
  Ellipse,
} from './style';
import Play from '../icons/play/play';

interface IReviewProp {
  image: string;
  title: string;
  subTitle: string;
  dataTime: string;
  onClick: (innerRef: any) => void;
}

const Review = ({ image, title, subTitle, dataTime, onClick }: IReviewProp) => {
  const imageRef = React.useRef(null);
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <DataTime>{dataTime}</DataTime>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
      <ImageWrapper ref={imageRef}>
        <Ellipse onClick={() => onClick(imageRef)}>
          <Play />
        </Ellipse>
        <Image src={image} alt="Alt" />
      </ImageWrapper>
    </Container>
  );
};

export default Review;
