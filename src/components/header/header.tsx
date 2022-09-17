import React from "react";
import Contacts, { IContactsProp } from "../contacts/contacts";
import {Container, Image, Components, Contact} from "./style";

interface IHeaderProp {
  image: string;
  contacts: IContactsProp[];
}

const Header = ({ image, contacts }: IHeaderProp) => {
  return (
    <Container>
        <Image src={image} alt="Alt" />
      <Components>
        {contacts.map((item, index) => (
            <Contact key={`${item.title}-${index}`}>
                <Contacts title={item.title} subTitle={item.subTitle} icon={item.icon} />
            </Contact>
        ))}
      </Components>
    </Container>
  );
};

export default Header;
