import styled from 'styled-components';
import Button from '../button';
import { colors } from 'src/constants';

export const Container = styled.div`
  color: ${colors.white};
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 1140px;
  text-align: left;
`;

export const H1 = styled.h1`
  align-items: center;
  font-weight: 700;
  font-size: xxx-large;
  line-height: 74px;
  text-transform: uppercase;
  height: 70px;
  margin: auto;
`;

export const Text = styled.div`
  margin: 16px 0px 50px;
  font-weight: 400;
  font-size: 18px;
  width: 50%;
  height: 97px;
  word-wrap: break-word;
`;

export const ContainerBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
`;

export const Image = styled.img`
  position: absolute;
  width: 100px;
  height: 55px;
  transform: matrix(1, -0.05, -0.2, 2, 10, 25);
  z-index: 2;
  margin-top: -50px;
  margin-left: 10px;
`;

export const ApplicationButton = styled(Button)`
  margin: 0 0 112px;
  width: 25%;
  height: 70px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const RoundButton = styled.button`
  position: relative;
  display: flex;
  padding: 10px;
  width: 25%;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: ${colors.Emperor};
  border-radius: 86px;
  color: ${colors.white};
  div {
    margin-left: 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
  }
  p {
    font-weight: 400;
  }

  & > svg {
    position: absolute;
    padding: 18px 24px;
    margin-right: 204px;
    width: 13px;
    heigth: 13px;
    box-shadow: 0px 2px 2px ${colors.tiaMaria};
    background: linear-gradient(
      180deg,
      ${colors.SchoolBusYellow},
      ${colors.pizazz}
    );
    border-radius: 50%;
  }
`;
