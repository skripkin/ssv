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
  text-align: left;
`;

export const H1 = styled.h1`
  align-items: center;
  font-weight: 700;
  font-size: 46px;
  line-height: 74px;
  text-transform: uppercase;
  height: 70px;
  margin: auto;
  @media (max-width: 1123px) {
    font-size: 33px;
    text-align: center;
  }
`;

export const Text = styled.div`
  margin: 16px 0px 50px;
  font-weight: 400;
  font-size: 18px;
  width: 50%;
  height: 97px;
  word-wrap: break-word;
  @media (max-width: 1123px) {
    text-align: center;
    margin: 0 auto 30px;
    font-size: 20px;
    width: 500px;
  }
`;

export const CaseBtn = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  position: relative;
  @media (max-width: 1123px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerBtn = styled.div`
  padding-right: 23px;
  @media (max-width: 1123px) {
    padding-right: 0;
  }
`;

export const ContainerBtn2 = styled.div``;

export const Image = styled.img`
  position: absolute;
  display: flex;
  width: 100px;
  height: 55px;
  top: -50px;
  transform: matrix(1, -0.05, -0.2, 2, 10, 25);
  z-index: 2;
  @media (max-width: 1123px) {
    top: -20px;
    margin-left: 23px;
  }
`;

export const ApplicationButton = styled(Button)`
  width: 254px;
  height: 70px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1123px) {
    width: 500px;
    margin: 30px 0;
    font-size: 38px;
  }
`;

export const RoundButton = styled.button`
  position: relative;
  display: flex;
  padding: 10px;
  width: 254px;
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
    @media (max-width: 1123px) {
      font-size: 25px;
    }
  }
  p {
    font-weight: 400;
    @media (max-width: 1123px) {
      margin-bottom: 10px;
    }
  }

  & > svg {
    position: absolute;
    display: flex;
    padding: 18px 24px;
    left: 10px;
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
  @media (max-width: 1123px) {
    width: 500px;
    font-size: 38px;
  }
`;
