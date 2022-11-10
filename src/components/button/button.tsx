import React from 'react';
import { Container } from './styles';

interface IButtonProp {
  title: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ title, onClick, className }: IButtonProp) => {
  return (
    <Container onClick={onClick} className={className}>
      {title}
    </Container>
  );
};

export default Button;
