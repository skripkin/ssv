import React from 'react';
import { ButtonSticky } from './styles';

interface ISideButtonProp{
  onClick: () => void;
}

const SideButton = ({ onClick }: ISideButtonProp) => {
  return (
    <div>
      <ButtonSticky onClick={onClick}>Click here for show components</ButtonSticky>
    </div>
  )
}

export default SideButton;
