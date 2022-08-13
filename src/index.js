// // import { createRoot } from 'react-dom/client';
// import React from 'https://cdn.skypack.dev/react';




// import App from './components/App';
// import { AppProvider } from './components/AppContext';

// const routes = {
//   solve: 'SOLVE',
//   constraints: 'CONSTRAINTS',
//   export: 'EXPORT',
// };

// createRoot(document.getElementById("root")).render((
//   // <AppProvider
//   //   routes={routes}
//   //   defaultRoute={routes.solve}
//   //   defaultTilesetName="walls"
//   //   defaultSize={75}
//   //   defaultFpsStep={0}
//   // >
//   //   <App />
//   // </AppProvider>
// ));

// const root = createRoot(document.getElementById('root'));
// root.render(<h1>hello</h1>);

// import * as pkg from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// console.log('react loaded:', pkg, React);
// console.log({ React, ReactDOM });


const rootElement = document.getElementById('root');
ReactDOM.render(
  <App />,
  rootElement,
);

import { PRNG } from './utils';
const r = new PRNG();
console.log(r.next());
console.log(r.next());
console.log(r.next());