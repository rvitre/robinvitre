import React, {Component, Suspense} from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import Header from './sections/Header';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const AppWrapper = styled.div`

`;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.appRefs = React.createRef();
}

  render() {
    return <Suspense fallback="loading">
      <AppWrapper>
        <Header appRefs={this.appRefs} />
        <Skills />
        <Projects />
        <Contact appRefs={this.appRefs} />
      </AppWrapper>
    </Suspense>
  };
}

export default withTranslation()(App);
