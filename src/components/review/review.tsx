import React from "react";
import { Container, Title, SubTitle, DataTime, Image, ImageWrapper, Ellipse } from "./style";
import Play from "../icons/play/play"

interface IReviewProp {
  image: string;
  title: string;
  subTitle: string;
  dataTime: string;
  onClick: () => void;

}

const Review = ({ image, title, subTitle, dataTime, onClick }: IReviewProp) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <DataTime>{dataTime}</DataTime>
        <SubTitle>{subTitle}</SubTitle>
      </div>
      <ImageWrapper>
        <Ellipse onClick={onClick}><Play/></Ellipse>
        <Image src={image} alt="Alt" />
      </ImageWrapper>
    </Container>
  );
};

export default Review;
