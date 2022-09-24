import styled from "styled-components";
import { colors } from "src/constants";

export const Image = styled.img` 
  object-fit: cover;
  position: absolute; 
  width: 100%;
  height: auto;
  background-color: ${colors.alto};
  background-repeat: no-repeat;
  background-size: cover;
`;
