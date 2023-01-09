import React from 'react';
import Contacts, { IContactsProp } from '../contacts/contacts';
import {
  Container,
  Components,
  Contact,
  Button1,
  Button2,
  Button3,
  WatsApp,
  Instagramm,
  Gis2,
  Title,
  B1Title,
  ButtonBox,
  ButtonLink1,
  ButtonLink2,
  ButtonLink3,
  ResponciveTitle,
  FindUsButtonTitle,
  ContactUsButtonTitle,
} from './style';

interface IUsMapContactsProp {
  contacts: IContactsProp[];
  className?: string;
  onClick: () => void;
  title: string;
  responciveTitle: string;
  contactUsButtonTitle: string;
  findUsButtonTitle: string;
}

const UsMapContacts = ({
  contacts,
  className,
  onClick,
  title,
  responciveTitle,
  contactUsButtonTitle,
  findUsButtonTitle,
}: IUsMapContactsProp) => (
  <Container>
    <Title>{title}</Title>
    <ResponciveTitle>{responciveTitle}</ResponciveTitle>
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
    <ContactUsButtonTitle>{contactUsButtonTitle}</ContactUsButtonTitle>
    <ButtonBox>
      <ButtonLink1 href="https://wa.me/+77478098082?text=Здравствуйте%2C+у+меня+есть+вопрос">
        <Button1 onClick={onClick}>
          <B1Title></B1Title>
          <WatsApp />
        </Button1>
      </ButtonLink1>
      <ButtonLink2 href="https://www.instagram.com">
        <Button2>
          <Instagramm />
        </Button2>
      </ButtonLink2>
    </ButtonBox>
    <ButtonLink3 href="https://go.2gis.com/3iwgk">
      <Button3>
        <FindUsButtonTitle>{findUsButtonTitle}</FindUsButtonTitle>
        <Gis2 />
      </Button3>
    </ButtonLink3>
  </Container>
);

export default UsMapContacts;
