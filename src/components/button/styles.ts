import styled from 'styled-components';
import { colors } from 'src/constants';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${colors.black};
  background: linear-gradient(
    180deg,
    ${colors.SchoolBusYellow},
    ${colors.pizazz}
  );
  box-shadow: 0px 4px 4px ${colors.tiaMaria};
  border: unset;
  border-radius: 86px;

  font-family: 'Century Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;
