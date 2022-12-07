import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  @media (max-width: 1153px) {
    padding: 0 12px;
  }

  @media (max-width: 828px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 266px;
  height: 67px;

  @media (max-width: 828px) {
    margin-bottom: 16px;
  }
`;

export const Components = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${colors.white};
  }

  @media (max-width: 828px) {
    display: flex;
  }

  @media (max-width: 562px) {
    & > div:nth-child(3) {
      display: none;
    }
  }
`;

export const Contact = styled.div`
  margin-left: 25px;
`;
