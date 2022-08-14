import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import AppHeader from './AppHeader';
// import Form from './Form';
import Grid from './Grid';
// import ConstraintEditor from './ConstraintEditor';
import Export from './Export';

const App = () => {
  const { routes, route } = useAppContext();

  return (
    <div>
      <AppHeader />
      <div>  
        <div>
          <aside width={200}>
            {/* <Form /> */}
          </aside>
          <div>
            {route === routes.solve && <Grid />}
            {/* {route === routes.constraints && <ConstraintEditor />} */}
            {route === routes.export && <Export />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
