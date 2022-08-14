import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import AppHeader from './AppHeader';
// import Form from './Form';
import Grid from './Grid';
// import ConstraintEditor from './ConstraintEditor';
import Export from './Export';
import { Header, LogoLink, Main, Sidebar, Footer } from '../styled-components/app-layout';


const App = () => {
  const { routes, route } = useAppContext();

  return (
    <>
      <Header>
        <LogoLink href="https://github.com/norgeous/wfc-react" style={{ float: 'left', paddingRight: '20px' }}>
          🌊 norgeous/wfc-react
        </LogoLink>
        <AppHeader />
      </Header>
      <Main>
          <Sidebar width={200}>
            {/* <Form /> */}
            form here
          </Sidebar>
          <div>
            {route === routes.solve && <Grid />}
            {/* {route === routes.constraints && <ConstraintEditor />} */}
            {route === routes.export && <Export />}
          </div>
      </Main>
      <Footer>Footer</Footer>
    </>
  );
};

export default App;
