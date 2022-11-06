import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  margin-right: 6px;
`;

export const Title = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.black};
`;

export const SubTitle = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.black};
`;
