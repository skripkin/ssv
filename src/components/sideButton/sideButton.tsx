import React from 'react';
import { useState } from 'react';
import Step from "../step";
import { ButtonSticky, Title } from './styles';

interface ISideButtonProp{
  title: string;
}

const SideButton = ({title}: ISideButtonProp) => {
  const [isShown, setIsShown] = useState(false);

  function handleClick(event: any) {
    setIsShown(!isShown);
  }
  
  return (
    <div>
      <Title>{title}</Title>
      <ButtonSticky onClick={handleClick}>Click</ButtonSticky>
      {isShown && <Box/>}
    </div>
  )
}
function Box(): JSX.Element {
  return (
    <Step
      title="Шаг 1"
      subTitle="определить уровень"
      onClick={() => null}
    />
  )
}

export default SideButton;
