import React from 'react';
import {
  Container,
  Content,
  H1,
  Image,
  Text,
  ContainerBtn,
  ApplicationButton,
  RoundButton,
} from './style';
import Play from '../icons/play/play';

interface IApplicationProp {
  image: string;
  h1: string;
  text: string;
  onClick: () => void;
}

const Application = ({ image, h1, text, onClick }: IApplicationProp) => {
  return (
    <Container>
      <Content className="wrapper">
        <H1>{h1}</H1>
        <Text>{text}</Text>
        <ContainerBtn>
          <Image src={image} alt="Alt" />
          <ApplicationButton title="Оставить заявку" onClick={onClick} />
          <RoundButton onClick={onClick}>
            <Play />
            <div>
              <p>Посмотреть видео </p>
              1мин. 26 сек.
            </div>
          </RoundButton>
        </ContainerBtn>
      </Content>
    </Container>
  );
};

export default Application;
