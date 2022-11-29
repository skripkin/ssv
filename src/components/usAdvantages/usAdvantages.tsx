import React from 'react';
import { Container, Case, Title, SubTitle, Image } from './style';

export interface IUsAdvantagesProp {
  image: string;
  title: string;
  subTitle: string;
}

const UsAdvantages = ({ image, title, subTitle }: IUsAdvantagesProp) => {
  return (
    <Container>
      <Case>
        <Image src={image} alt="Alt" />
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </div>
      </Case>
    </Container>
  );
};

export default UsAdvantages;
