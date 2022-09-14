import React from "react";
import { Container, Title, SubTitle, Icon } from './style'


export interface IContactsProp {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

const Contacts = ({ icon, title, subTitle }: IContactsProp) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
    </Container>
  );
};

export default Contacts;
