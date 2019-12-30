import React from 'react';
import styled from 'styled-components';

import Header from './sections/Header';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const AppWrapper = styled.div`
  background: #3e1c93;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </AppWrapper>
  );
}

export default App;
