import styled from 'styled-components';

export const ContainerImg = styled.div`
  padding-top: 10px;
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  display: block;
  position: relative;
  bottom: 0;
  align-items: baseline;
  width: 100%;
  @media (min-width: 1603px) {
    width: auto;
    height: 480px;
    margin-bottom: -60px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
