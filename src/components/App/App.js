import React from 'react';
import SignUpForm from "../SignUpForm";
import {AppContainer, Container} from "./styles";

const App = () => {
  return (
    <AppContainer>
      <Container>
        <SignUpForm/>
      </Container>
    </AppContainer>
  );
};

export default App;
