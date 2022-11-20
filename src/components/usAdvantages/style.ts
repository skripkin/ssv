import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div`
  display: flex;
  width: 1140px;
  width: 100%;
  padding: 30px 30px;
  margin: 0 auto 94px;
`;

export const Case = styled.div`
  background-position: center center;
`;

export const Image = styled.img`
  margin: 0 auto;
  display: block;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${colors.black};
`;

export const SubTitle = styled.div`
  font-style: normal;
  padding-top: 20px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${colors.black};
`;
