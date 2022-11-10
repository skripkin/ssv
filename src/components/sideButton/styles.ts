import styled from 'styled-components';
import { colors } from 'src/constants';

export const ButtonSticky = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 86px;
  background: linear-gradient(
    180deg,
    ${colors.SchoolBusYellow},
    ${colors.pizazz}
  );
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 100%;
`;

export const Box = styled.div`
  bottom-right: 10px;
  position: sticky;
`;
