import React from 'react';
import { Container, Title, SubTitle, Icon } from './style';

export interface IContactsProp {
  link?: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const Contacts = ({
  icon,
  title,
  subTitle,
  titleClassName,
  subTitleClassName,
}: IContactsProp) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <div>
        <Title className={titleClassName}>{title}</Title>
        <SubTitle className={subTitleClassName}>{subTitle}</SubTitle>
      </div>
    </Container>
  );
};

export default Contacts;
