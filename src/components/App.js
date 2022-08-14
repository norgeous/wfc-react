import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import AppHeader from './AppHeader';
// import Form from './Form';
import Grid from './Grid';
// import ConstraintEditor from './ConstraintEditor';
import Export from './Export';
import { Container, Header, LogoLink, Main, Content, Sidebar, Footer } from '../styled-components/app-layout';
// import useElementSize from '../hooks/useElementSize';


const App = () => {
  const { routes, route, setElementRef } = useAppContext();

  // const x = useElementSize(ref);
  const elementRef = useRef();
  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  useEffect(() => {
    if (elementRef?.current) {
      setElementWidth(elementRef.current.clientWidth);
      setElementHeight(elementRef.current.clientHeight);
    }
  }, [elementRef]);

  console.log(elementRef, elementWidth, elementHeight);

  return (
    <Container>
      <Header>
        <LogoLink href="https://github.com/norgeous/wfc-react">
          🌊 norgeous/wfc-react
        </LogoLink>
        <AppHeader />
      </Header>
      <Main>
        <Sidebar width={200}>
          {/* <Form /> */}
          form here
        </Sidebar>
        <Content ref={elementRef}>
          {elementWidth + elementHeight}
          {/* {route === routes.solve && <Grid />} */}
          {/* {route === routes.constraints && <ConstraintEditor />} */}
          {route === routes.export && <Export />}
        </Content>
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default App;
