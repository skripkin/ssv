import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div`
  display: flex;
`;

export const Case = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-position: center center;
`;

export const Image = styled.img`
  max-width: 100px;
  display: block;
`;

export const Title = styled.p`
  margin: 15px auto;
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
