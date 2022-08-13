import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import Test from '../Test.jsx';

console.log('running index.jsx');

const rootElement = document.getElementById('root');
ReactDOM.render(
  <App />,
  rootElement,
);

import { PRNG } from './utils.js';
const r = new PRNG();
console.log(r.next());
console.log(r.next());
console.log(r.next());