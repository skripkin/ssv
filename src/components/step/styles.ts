import styled from "styled-components";
import Button from "../button/button";
import { colors } from "src/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  box-shadow: 0px 5px 15px ${colors.silver};
  border-radius: 24px;
`; 

export const Title = styled.p`
  
  text-align: center;
  font-style: normal;
  line-height: 56px;
  text-transform: uppercase;
  color: ${colors.pizazz};
  font-weight: 700;
  font-size: 48px;
  `;
  
export const SubTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  line-height: 29px;
  color: ${colors.black};
  font-weight: 400;
  font-size: 24px;
`;

export const StepButton = styled(Button)`
  padding: 0px 8px 0px;
  width: 260px;
  height: 83px;
  margin-top: 17px;
  margin-bottom: 43px;
`;
