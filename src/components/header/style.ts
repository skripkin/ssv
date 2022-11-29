import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 266px;
  height: 67px;
`;

export const Components = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${colors.white};
  }
`;

export const Contact = styled.div`
  margin-left: 25px;
`;
