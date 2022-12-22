import React from 'react';
import Application from '../application';
import {
  Container,
  Gradient,
  Tanya,
  Application2,
  Leftlist,
  RightList,
} from './style';

function HeaderBackground() {
  return (
    <Container>
      <Gradient />
      <Tanya src="../Tanya.svg" alt="Alt" />
      <Leftlist src="../leftlist.png" alt="Alt" />
      <RightList src="../12345.png" alt="Alt" />
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
