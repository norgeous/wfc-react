import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Menu from './Menu';
import Form from './Form';
import Buttons from './Buttons';
import Grid from './Grid';
// import ConstraintEditor from './ConstraintEditor';
import Export from './Export';
import { Container, Header, LogoLink, Main, Content, Sidebar, Footer } from '../styled-components/app-layout';

const App = () => {
  const { routes, route, elementRef, width, height } = useAppContext();

  return (
    <Container>
      <Header>
        <LogoLink href="https://github.com/norgeous/wfc-react">
          🌊 norgeous/wfc-react
        </LogoLink>
        <Menu />
      </Header>
      <Main>
        <Sidebar>
          <Form />
        </Sidebar>
        <Content ref={elementRef}>
          {width} x {height}
          {/* {route === routes.solve && <Grid />} */}
          {/* {route === routes.constraints && <ConstraintEditor />} */}
          {route === routes.export && <Export />}
        </Content>
      </Main>
      <Footer>
        <Buttons />
      </Footer>
    </Container>
  );
};

export default App;
