import React from 'react';
import { useState } from 'react';
import Step from "../step";
import { ButtonSticky, Title } from './styles';

interface ISideButtonProp{
  title: string;
  step: {
    title: string;
    subTitle: string;
    onClick: () => void;
  }
}

const SideButton = ({ title, step }: ISideButtonProp) => {
  const [isShown, setIsShown] = useState(false);

  function handleClick(event: any) {
    setIsShown(!isShown);
  }
  
  return (
    <div>
      <Title>{title}</Title>
      <ButtonSticky onClick={handleClick}>Click</ButtonSticky>
      {isShown && <Step
        title={step.title}
        subTitle={step.subTitle}
        onClick={step.onClick}
      />}
    </div>
  )
}

export default SideButton;
