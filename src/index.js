import App from './components/App';
import { AppProvider } from './components/AppContext';

const routes = {
  solve: 'SOLVE',
  constraints: 'CONSTRAINTS',
  // generatorOld: 'GENERATOR_OLD',
  // tileEditor: 'EDITOR',
};

ReactDOM.createRoot(document.getElementById("root")).render((
  <AppProvider
    routes={routes}
    defaultRoute={routes.solve}
    defaultTilesetName="triangles"
    defaultSize={100}
  >
    <App />
  </AppProvider>
));
