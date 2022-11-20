import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div`
  display: flex;
  text-align: left;
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
  width: 370px;
  height: 136px;
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
  background: linear-gradient(180deg, #f9e000 0%, #fd9100 79.17%);
  box-shadow: 0px 2px 2px #c8510e;
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
