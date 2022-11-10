import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div``;

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
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  white-space: pre;
  color: ${colors.black};
`;
