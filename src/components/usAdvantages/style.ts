import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.div``;

export const Case = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-position: center center;
  @media (max-width: 951px) {
    margin-top: 24px;
  }
`;

export const Image = styled.img`
  max-width: 100px;
  display: flex;
  align-items: end;
  @media (max-width: 562px) {
    margin: 30px auto 0;
  }
`;

export const Title = styled.p`
  margin: 15px auto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${colors.black};
  @media (max-width: 923px) {
    margin: 10px auto;
  }
  @media (max-width: 562px) {
    font-size: 22px;
    align-items: center;
  }
`;

export const SubTitle = styled.div`
  font-style: normal;
  padding-top: 20px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${colors.black};
  @media (max-width: 923px) {
    padding-top: 0;
  }
  @media (max-width: 562px) {
    font-size: 20px;
    justify-content: center;
  }
`;
