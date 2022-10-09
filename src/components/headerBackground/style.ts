import styled from "styled-components";

export const Container = styled.div`
  height: 985px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const Gradient = styled.div`
  height: 985px;
  width: 100%;
  position: absolute;
  background-color: #757575;
  background-image: linear-gradient(
    103deg,
    transparent 71%,
    #fd9100 60%,
    #fd9100 73%,
    transparent 72%,
    transparent 75%,
    #fd9100 75%
  );
`;

export const Tanya = styled.img`
  z-index: 1;
  position: absolute;
  width: 568.74px;
  height: 959.48px;
  right: 150px;
  top: 10px;
`;

export const Leftlist = styled.img`
  position: absolute;
  z-index: 1;
  width: 250.26px;
  height: 350.11px;
  left: -11px;
  top: 70px;
`;

export const RightList = styled.img`
  position: absolute;
  z-index: 2;
  width: 300px;
  height: 400px;
  top: 440px;
  right: 5px;
`;

export const LeftListYellow = styled.img`
  position: absolute;
  z-index: 1;
  width: 230px;
  height: 252.03px;
  left: -83px;
  transform: rotate(9deg);
  top: 64px;
`;

export const RightListYellow = styled.img`
  position: absolute;
  z-index: 2;
  width: 230px;
  height: 200px;
  right: 5px;
  top: 545px;
  transform: rotate(90deg);
  opacity: 0.8;
`;
