import styled from "styled-components";
import { colors } from "src/constants";

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: block;
`;

export const Title = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: ${colors.black};
`;

export const SubTitle = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.black};
`;

export const DataTime = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #808080;
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
  background: linear-gradient(180deg, #F9E000 0%, #FD9100 79.17%);
  box-shadow: 0px 2px 2px #C8510E;
  border-radius: 50%;
  border: unset;
  cursor: pointer;
  
  & > svg {
    width: 14px;
    heigth: 14px;
  }
   
`;

export const ImageWrapper = styled.div`
 position: relative;
 margin-left: 10px;
`;
