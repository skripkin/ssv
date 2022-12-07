import React from 'react';
import Application from '../application';
import {
  Container,
  Gradient,
  Tanya,
  Application2,
  Leftlist,
  RightList,
  LeftListYellow,
  RightListYellow,
} from './style';

function HeaderBackground() {
  return (
    <Container>
      <Gradient />
      <Tanya src="../Tanya.svg" alt="Alt" />
      <Leftlist src="../LeftList.svg" alt="Alt" />
      <RightList src="../RightList.svg" alt="Alt" />
      <LeftListYellow src="../LeftListYellow.svg" alt="Alt" />
      <RightListYellow src="../RightListYellow.svg" alt="Alt" />
      <Application2>
        <Application
          h1="Проект “Английский центр”"
          text="Обучение английскому языку
              на высоком уровне качества через курсы, разговорные клубы,
              ресурсный центр
              и общение с носителями
              английского языка"
          image="./phone.png"
          onClick={() => null}
        />
      </Application2>
    </Container>
  );
}

export default HeaderBackground;
