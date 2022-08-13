

import React from 'react';
import ReactDOM from 'react-dom';
import TestC from './TestC';
// import App from './components/App';
// import { AppProvider } from './components/AppContext';

// const routes = {
//   solve: 'SOLVE',
//   constraints: 'CONSTRAINTS',
//   export: 'EXPORT',
// };



const rootElement = document.getElementById('root');
ReactDOM.render(
  <TestC />,
  // <AppProvider
  //   routes={routes}
  //   defaultRoute={routes.solve}
  //   defaultTilesetName="walls"
  //   defaultSize={75}
  //   defaultFpsStep={0}
  // >
  //   <App />
  // </AppProvider>
  rootElement,
);

import { PRNG } from './utils';
const r = new PRNG();
console.log(r.next());
console.log(r.next());
console.log(r.next());