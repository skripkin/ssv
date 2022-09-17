import styled from "styled-components";
import { colors } from "src/constants";

export const Container = styled.div`
margin: 0;
padding: 0;
`;

export const Image = styled.img`
object-fit: cover;
position: absolute; 
background-repeat: no-repeat;
background-size: cover;
background-color: ${colors.alto};
width: 100%;
height: 50%;
`