import styled from 'styled-components';
import { colors } from 'src/constants';

export const Box = styled.div`
  width: 100%;
  height: 600px;
  background: ${colors.Gallery};

  @media (max-width: 640px) {
    height: 390px;
  }

  @media (max-width: 870px) {
    height: 530px;
  }

  @media (max-width: 600px) {
    height: 420px;
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

  @media (max-width: 1150px) {
    padding-right: 20px;
  }

  @media (max-width: 700px) {
    padding-right: 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  height: 600px;
  display: flex;
  position: relative;

  @media (max-width: 1050px) {
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
`;

export const FirstImage = styled.img`
  height: 500px;
  bottom: -40px;
  position: relative;
  left: 30px;

  @media (max-width: 1150px) {
    width: 100%;
    left: 16px;
    margin-right: 25px;
  }

  @media (max-width: 870px) {
    height: 430px;
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SecondImage = styled.img`
  @media (min-width: 700px) {
    display: none;
  }

  @media (max-width: 700px) {
    height: 360px;
    margin-top: 50px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }

  @media (max-width: 500px) {
    object-fit: cover;
    width: 100%;
    height: 450px;
    margin: 0;
  }

  @media (max-width: 400px) {
    height: ;
  }
`;

export const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  width: 80%;
  margin-top: 100px;
  margin-left: 50px;

  @media (max-width: 2500px) {
    font-size: 50px;
  }

  @media (max-width: 1800px) {
    font-size: 40px;
    margin-left: 30px;
  }

  @media (max-width: 1480px) {
    font-size: 36px;
    margin-left: 32px;
  }

  @media (max-width: 1050px) {
    margin-left: 25px;
    margin-top: 100px;
    font-size: 30px;
  }
  @media (max-width: 1151px) {
    font-size: 30px;
    margin-top: 100px;
  }

  @media (max-width: 870px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-top: 12px;
    font-size: 22px;
  }

  @media (max-width: 400px) {
    margin-top: 0;
  }
`;

export const SubTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  width: 80%;
  margin-top: 30px;
  margin-left: 50px;

  @media (max-width: 2500px) {
    font-size: 30px;
  }

  @media (max-width: 1800px) {
    font-size: 30px;
    margin-left: 25px;
  }

  @media (max-width: 1480px) {
    font-size: 26px;
    margin-left: 25px;
  }

  @media (max-width: 1151px) {
    font-size: 22px;
  }

  @media (max-width: 1050px) {
    margin-left: 25px;
  }

  @media (max-width: 870px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-top: 12px;
    font-size: 16px;
  }
`;
