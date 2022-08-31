import React from "react";
import { Container } from './styles';

interface IButtonProp {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IButtonProp) => {
  return(
    <Container onClick={onClick}>
      {title}
    </Container>
  )
}

export default Button;