import styled from 'styled-components';

export const Components = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  @media (max-width: 951px) {
    flex-wrap: wrap;
    padding: 0 12px;
    margin: 24px 30px;
  }
  @media (max-width: 562px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
  max-width: 180px;
`;
