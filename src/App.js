import React, {Suspense} from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import Header from './sections/Header';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const AppWrapper = styled.div`

`;

function App({t}) {
  return (
    <Suspense fallback="loading">
      <AppWrapper>
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </AppWrapper>
    </Suspense>
  );
}

export default withTranslation()(App);
