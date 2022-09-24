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
      <H1>Проект “Английский центр”</H1>
      <Text>{
        <div>
      <p>
        Обучение английскому языку
      </p>
      <p>
      на высоком уровне качества через курсы, разговорные клубы,
          ресурсный центр
      </p>
      <p>
      и общение с носителями
          английского языка
      </p>
      </div>
      }
      </Text>
      <Image src={image} alt="Alt"/>
      <ApplicationButton title="Оставить заявку" onClick={onClick}/>
      <RoundButton onClick={onClick}>
        <Play/>
        <div>
          <p>
            Посмотреть видео
          </p>
          <p>
            1мин. 26 сек.
          </p>
        </div>
      </RoundButton>
    </Container>
  );
};

export default Application;