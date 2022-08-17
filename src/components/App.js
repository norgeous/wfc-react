import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import Menu from './Menu';
// import Form from './Form';
import Grid from './Grid';
// import ConstraintEditor from './ConstraintEditor';
import Export from './Export';
import { Container, Header, LogoLink, Main, Content, Sidebar, Footer } from '../styled-components/app-layout';
import Input from './FormInput';
import { Button } from '../styled-components/form';

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
          {/* <Form /> */}
          <Input label="test" type="number" />
          <Input label="test" type="range" />
          <Input label="test" type="checkbox" />
          <Input label="test" type="radio" name="a"/>
          <Input label="test" type="radio" name="a"/>
        </Sidebar>
        <Content ref={elementRef}>
          {width} x {height}
          {/* {route === routes.solve && <Grid />} */}
          {/* {route === routes.constraints && <ConstraintEditor />} */}
          {route === routes.export && <Export />}
        </Content>
      </Main>
      <Footer>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
      </Footer>
    </Container>
  );
};

export default App;
