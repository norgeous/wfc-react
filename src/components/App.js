import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import AppHeader from './AppHeader';
// import Form from './Form';
import Grid from './Grid';
// import ConstraintEditor from './ConstraintEditor';
import Export from './Export';
import { Container, Header, LogoLink, Main, Content, Sidebar, Footer } from '../styled-components/app-layout';


const App = () => {
  const { routes, route } = useAppContext();

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
        <Content>
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
