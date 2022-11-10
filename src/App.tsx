import React from 'react';
import AppPage from './appPage';
import { SideButton } from './components';
import { Container, ModalWrapper } from './style';

const App = () => {
  const [showComponents, setShowComponents] = React.useState(false);

  return (
    <Container>
      <div>Page here</div>
      <SideButton onClick={() => setShowComponents(!showComponents)} />
      {showComponents && (
        <ModalWrapper>
          <AppPage onClick={() => setShowComponents(!showComponents)} />
        </ModalWrapper>
      )}
    </Container>
  );
};

export default App;
