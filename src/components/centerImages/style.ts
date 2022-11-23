import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  background: ${colors.Gallery};
`;

export const FirstImage = styled.img`
  width: 290px;
  margin-bottom: 40%;
`;

export const SecondImage = styled.img`
  z-index: 1;
  position: absolute;
  width: 290px;
  top: 15%;
  left: 40%;
`;

export const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  width: 350px;
`;

export const SubTitle = styled.div`
  margin-top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  width: 400px;
`;

export const Component = styled.div`
  margin-bottom: 10%;
`;
