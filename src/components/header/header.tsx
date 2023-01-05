import React from 'react';
import Contacts, { IContactsProp } from '../contacts/contacts';
import { Container, Image, Components, Contact } from './style';

interface IHeaderProp {
  image: string;
  contacts: IContactsProp[];
  link?: string;
}

const Header = ({ image, contacts, link }: IHeaderProp) => {
  return (
    <Container>
      <Image src={image} alt="Alt" />
      <Components>
        {contacts.map((item, index) => (
          <Contact key={`${item.title}-${index}`}>
            {link == link ? (
              <a className="link" href={item.link}>
                <Contacts
                  link={link}
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                />
              </a>
            ) : (
              <Contacts
                title={item.title}
                subTitle={item.subTitle}
                icon={item.icon}
              />
            )}
          </Contact>
        ))}
      </Components>
    </Container>
  );
};

export default Header;
