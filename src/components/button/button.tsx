import React from "react";
import { Container } from './styles';

interface IButtonProp {
  title: string;
  title2: string;
  onClick: () => void;
}

const Button = ({ title, title2, onClick }: IButtonProp) => {
  return(
    <Container onClick={onClick}>
      {title}
      {title2}
    </Container>
  )
}

export default Button;