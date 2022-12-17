import styled from 'styled-components';
import { colors } from 'src/constants';

export const Box = styled.div`
  width: 100%;
  height: 600px;
  padding: 5%;
  background: ${colors.Gallery};

  @media (max-width: 640px) {
    height: 390px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 600px;
    padding: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  height: 600px;
  width: 600px;
  display: flex;
  position: relative;

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    height: 100%;
    width: 100%;
  }
`;

export const RightBox = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 500px) {
    width: 100%;
    height: 30%;
  }
-`;

export const FirstImage = styled.img`
  height: 500px;
  bottom: -100px;
  position: relative;

  @media (max-width: 1050px) {
    width: 80%;
  }

  @media (max-width: 870px) {
    bottom: -40px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const SecondImage = styled.img`
  z-index: 1;
  position: absolute;
  height: 500px;
  right: 0;
  width: 440px;

  @media (max-width: 1050px) {
    top: 0;
    width: 80%;
  }

  @media (max-width: 640px) {
    height: 390px;
    width: 100%;
    top: 0;
    bottom: 0;
  }

  @media (max-width: 500px) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  width: 80%;
  margin-top: 25px;
  margin-left: 50px;

  @media (max-width: 2500px) {
    font-size: 50px;
  }

  @media (max-width: 1800px) {
    font-size: 40px;
    margin-left: 30px;
  }

  @media (max-width: 1480px) {
    font-size: 32px;
    margin-left: 32px;
  }

  @media (max-width: 1050px) {
    margin-left: 25px;
    margin-top: 50px;
    font-size: 30px;
  }
  @media (max-width: 1151px) {
    font-size: 24px;
  }

  @media (max-width: 870px) {
    font-size: 20px;
    margin-top: 30%;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-top: 12px;
    font-size: 22px;
  }
`;

export const SubTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  width: 80%;
  margin-top: 50px;
  margin-left: 50px;

  @media (max-width: 2500px) {
    font-size: 30px;
  }

  @media (max-width: 1800px) {
    font-size: 30px;
    margin-left: 25px;
  }

  @media (max-width: 1480px) {
    font-size: 22px;
    margin-left: 25px;
  }

  @media (max-width: 1151px) {
    font-size: 18px;
  }

  @media (max-width: 1050px) {
    margin-left: 25px;
  }

  @media (max-width: 870px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-top: 12px;
    font-size: 16px;
  }
`;
