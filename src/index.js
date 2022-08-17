import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styled-components/theme';

import { AppProvider } from './contexts/AppContext';
import App from './components/App';

const routes = {
  solve: 'SOLVE',
  constraints: 'CONSTRAINTS',
  export: 'EXPORT',
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  (
    <AppProvider
      routes={routes}
      defaultRoute={routes.solve}
      defaultTilesetName="walls"
      defaultSize={75}
      defaultFpsStep={1}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  ),
  rootElement,
);
