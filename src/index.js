import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './contexts/AppContext';
// import TestC from './TestC';
import App from './components/App';

const routes = {
  solve: 'SOLVE',
  constraints: 'CONSTRAINTS',
  export: 'EXPORT',
};

const rootElement = document.getElementById('root');
ReactDOM.render((
    <AppProvider
      routes={routes}
      defaultRoute={routes.solve}
      defaultTilesetName="walls"
      defaultSize={75}
      defaultFpsStep={0}
    >
      {/* <TestC /> */}
      <App />
    </AppProvider>
  ),
  rootElement,
);

import { PRNG } from './utils';
const r = new PRNG();
console.log(r.next());
console.log(r.next());
