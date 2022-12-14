import React from 'react';
import {
  Container,
  Content,
  H1,
  Image,
  Text,
  CaseBtn,
  ContainerBtn,
  ContainerBtn2,
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
        <CaseBtn>
          <ContainerBtn>
            <Image src={image} alt="Alt" />
            <ApplicationButton title="Оставить заявку" onClick={onClick} />
          </ContainerBtn>
          <ContainerBtn2>
            <RoundButton onClick={onClick}>
              <Play />
              <div>
                <p>Посмотреть видео </p>
                1мин. 26 сек.
              </div>
            </RoundButton>
          </ContainerBtn2>
        </CaseBtn>
      </Content>
    </Container>
  );
};

export default Application;
