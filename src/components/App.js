import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Menu from './Menu';
import Form from './Form';
import Buttons from './Buttons';
import Grid from './Grid';
import ConstraintEditor from './ConstraintEditor';
import Export from './Export';
import { Container, Header, LogoLink, Main, Content, Sidebar, Footer, ContentInner, Center } from '../styled-components/app-layout';

const App = () => {
  const { routes, route, elementRef } = useAppContext();

  return (
    <Container>
      <Header>
        <LogoLink href="https://github.com/norgeous/wfc-react" target="_blank">
          🌊 norgeous/wfc-react
        </LogoLink>
        <Menu />
      </Header>
      <Main>
        <Sidebar>
          <Form />
        </Sidebar>
        <Content ref={elementRef}>
          <ContentInner>
            {route === routes.solve && <Center><Grid /></Center>}
            {route === routes.constraints && <ConstraintEditor />}
            {route === routes.export && <Center><Export /></Center>}
          </ContentInner>
        </Content>
      </Main>
      <Footer>
        <Buttons />
      </Footer>
    </Container>
  );
};

export default App;
