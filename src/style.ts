import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90vh;
  overflow: auto;
  z-index: 10;
`;

export const CrossButton = styled.button`
  display: block;
  position: sticky;
  top: 12px;
  margin-left: auto;
  margin-right: 12px;
  padding: 8px;
  z-index: 10;
`;