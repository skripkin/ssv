import styled from 'styled-components';
import Button from '../button/button';
import { colors } from 'src/constants';

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  box-shadow: 0px 5px 15px ${colors.silver};
  border-radius: 24px;
  padding: 0 10px;
  margin: 0 10px;
  width: 247px;
  height: 282px;

  @media (max-width: 1220px) {
    margin: 10px 10px;
    width: 200px;
  }

  @media (max-width: 498px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-style: normal;
  line-height: 56px;
  text-transform: uppercase;
  color: ${colors.pizazz};
  font-weight: 700;
  font-size: 48px;
  padding: 0 0 25px;
`;

export const SubTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  line-height: 22px;
  color: ${colors.black};
  font-weight: 400;
  font-size: 17px;
  padding: 0 0 30px;
`;

export const StepButton = styled(Button)`
  text-transform: uppercase;
  position: relative;
  padding: 0px 8px 0px;
  width: 200px;
  height: 53px;
  margin-top: 17px;
`;
