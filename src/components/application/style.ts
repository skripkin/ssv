import styled from "styled-components";
import Button from "../button";
import { colors } from "src/constants";


export const Container = styled.div`
  color: ${colors.white};
  flex-direction: column;
  background-color: ${colors.alto};
`;

export const H1 = styled.h1`
  align-items: center;
  font-weight: 700;
  font-size: 60px;
  line-height: 74px;
  text-transform: uppercase;
  width: 940px;
  height: 70px;
  margin: 77px 166px 0px 166px;
`;

export const Text = styled.div`
  margin: 16px 166px 0px 166px;
  font-weight: 400;
  font-size: 18px;
  width: 756px;
  height: 97px;
  top: 255.17px;
`;

export const Image = styled.img`
  width: 100px;
  height: 55px;
  -webkit-transform: matrix(1, -.05, -0.2, 2, 10, 25);
  z-index: 0;
  margin: 0px 166px 0px 166px;
`;

export const ApplicationButton = styled(Button)`
  display: flex;
  text-transform: none;
  padding: 0px 8px 0px;
  margin: 0px 166px 0px 166px;
  width: 254px;
  height: 70px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const RoundButton = styled.button`

  margin: -65px 450px 0px 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 254px;
  height: 70px;
  background: ${colors.silver};
  border-radius: 86px;
  color: ${colors.white};
  
  p:first-child{
    font-weight: 400;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    transform: inherit;
    -webkit-transform: matrix(1, 0, 0, 1, -34, 0);
  }

  p:last-child {
    transform:
    text-align: center;
    font-weight: 700;
    transform: inherit;
    -webkit-transform: matrix(1, 0, 0, 1, -34, 0);
  }

  & > svg {
    padding: 18px 24px 18px 24px;
    margin-right: 55px;
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

