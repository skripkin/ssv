import React from 'react';
import { Container, Title, SubTitle, StepButton } from './styles';

interface IDivProp {
  title: string;
  subTitle: string;
  onClick: () => void;
}
const Div = ({ title, subTitle, onClick }: IDivProp) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <StepButton title="Подробнее" onClick={onClick} />
    </Container>
  );
};
export default Div;
