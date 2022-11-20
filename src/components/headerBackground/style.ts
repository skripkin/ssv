import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 740px;
  width: 100%;
  box-sizing: border-box;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #757575;
  background-image: linear-gradient(
    106deg,
    transparent 72%,
    #fd9100 60%,
    #fd9100 74%,
    transparent 74%,
    transparent 76%,
    #fd9100 76%
  );
`;

export const AllList = styled.div``;

export const Application2 = styled.div`
  margin: auto 0;
  z-index: 100;
`;

export const Tanya = styled.img`
  z-index: 1;
  position: absolute;
  width: 470px;
  right: 11.3%;
  top: 10%;
`;

export const Leftlist = styled.img`
  position: absolute;
  z-index: 1;
  width: 205px;
`;

export const RightList = styled.img`
  position: absolute;
  z-index: 2;
  width: 275px;
  top: 50%;
  right: 1%;
`;

export const LeftListYellow = styled.img`
  position: absolute;
  z-index: 1;
  width: 129px;
  left: -2%;
  top: -1%;
  transform: rotate(-2deg);
  opacity: 0.8;
`;

export const RightListYellow = styled.img`
  position: absolute;
  z-index: 2;
  width: 203px;
  right: 5%;
  top: 58%;
  transform: rotate(-0.25turn);
  opacity: 0.8;
`;
