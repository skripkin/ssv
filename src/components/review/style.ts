import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div`
  display: flex;
  text-align: left;
  @media (max-width: 1000px) {
    padding: 0 12px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  bottom: 50px;
  margin-right: 34px;
  margin-bottom: 34px;
  @media (max-width: 1102px) {
    margin-right: 20px;
  }
  @media (max-width: 1000px) {
    margin: 0;
    bottom: 0;
    text-align: center;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: ${colors.black};
  @media (max-width: 1000px) {
    margin-top: 15px;
    margin-bottom: 12px;
  }
  @media (max-width: 418px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.p`
  margin: 0;
  width: 370px;
  height: 136px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.black};
  @media (max-width: 1051px) {
    width: 300px;
    margin-right: 20px;
  }
  @media (max-width: 1000px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 510px) {
    width: 450px;
    height: 160px;
  }
  @media (max-width: 480px) {
    width: 400px;
    height: 200px;
  }
  @media (max-width: 418px) {
    width: 340px;
    height: 300px;
  }
  @media (max-width: 364px) {
    width: 300px;
    height: 300px;
  }
`;

export const DataTime = styled.p`
  margin: 0 0 17px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #808080;
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-left: 10px;
`;

export const Ellipse = styled.button`
  display: flex;
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  background: linear-gradient(180deg, #f9e000 0%, #fd9100 79.17%);
  box-shadow: 0px 2px 2px #c8510e;
  border-radius: 50%;
  border: unset;
  cursor: pointer;

  & > svg {
    width: 14px;
    heigth: 14px;
  }
  @media (max-width: 418px) {
    width: 50px;
    height: 50px;
  }
`;

export const Image = styled.img`
  display: block;
  @media (max-width: 1078px) {
    width: 500px;
  }
  @media (max-width: 1051px) {
    margin-left: -30px;
    width: auto;
  }
  @media (max-width: 1000px) {
    margin: 0;
  }
  @media (max-width: 418px) {
    width: 400px;
  }
`;
