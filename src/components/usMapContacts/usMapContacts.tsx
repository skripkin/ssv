import React from 'react';
import Contacts, { IContactsProp } from '../contacts/contacts';
import {
  Container,
  Components,
  Contact,
  Button1,
  Button2,
  Arrow,
  Watsapp,
  Instagramm,
  Gis2,
  Title,
  FindUsButtonTitle,
  ContactUsButtonTitle,
} from './style';

interface IUsMapContactsProp {
  contacts: IContactsProp[];
  className?: string;
  onClick: () => void;
  title: string;
  contactUsButtonTitle: string;
  findUsButtonTitle: string;
}

const UsMapContacts = ({
  contacts,
  className,
  onClick,
  title,
  contactUsButtonTitle,
  findUsButtonTitle,
}: IUsMapContactsProp) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Components>
        {contacts.map((item, index) => (
          <Contact className={className} key={`${item.title}-${index}`}>
            <Contacts
              title={item.title}
              subTitle={item.subTitle}
              icon={item.icon}
              titleClassName="us-map-contact-title"
              subTitleClassName="us-map-contact-subtitle"
            />
          </Contact>
        ))}
      </Components>
      <Button1 onClick={onClick}>
        <ContactUsButtonTitle>{contactUsButtonTitle}</ContactUsButtonTitle>
        <Arrow />
        <Watsapp />
        <Instagramm />
      </Button1>
      <Button2>
        <FindUsButtonTitle>{findUsButtonTitle}</FindUsButtonTitle>
        <Arrow />
        <Gis2 />
      </Button2>
    </Container>
  );
};

export default UsMapContacts;
