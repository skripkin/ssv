import React from "react";
import {Container, H1, Image, Text, ApplicationButton, RoundButton} from "./style";
import Play from "../icons/play/play"

interface IApplicationProp {
  image: string;
  h1: string;
  text: string;
  onClick: () => void;
}

const Application = ({ image, h1, text, onClick}: IApplicationProp) => {

  return (
    <Container>
      <H1>{h1}</H1>
      <Text>{text}</Text>
      <Image src={image} alt="Alt"/>
      <ApplicationButton title="Оставить заявку" onClick={onClick}/>
      <RoundButton onClick={onClick}>
        <Play/>
        <div>
          <p>
            Посмотреть видео 
          </p>          
            1мин. 26 сек.
        </div>
      </RoundButton>
    </Container>
  );
};

export default Application;