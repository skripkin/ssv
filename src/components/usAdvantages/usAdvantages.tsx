import React from "react";
import { Container, Title, SubTitle, Image } from './style'


export interface IUsAdvantagesProp {
  image: string;
  title: string;
  subTitle: string;
}

const UsAdvantages = ({ image, title, subTitle }: IUsAdvantagesProp) => {
  return (
    <Container>
      <Image src={image} alt="Alt" />
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
    </Container>
  );
};

export default UsAdvantages;