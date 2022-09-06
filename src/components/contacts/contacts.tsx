import React, { ReactFragment } from "react";
import { Container } from './style'


interface IContactsProp {
  icon: ReactFragment;
  title: string;
  subTitle: string;
}

const Contacts = ({ icon, title, subTitle }: IContactsProp) => {
  return (
    <Container>
      <div> {icon} </div>
      <div>
        {title}
        {subTitle}
      </div>
    </Container>
  );
};

export default Contacts;
