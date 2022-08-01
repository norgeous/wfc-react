import App from './components/App';
import { AppProvider } from './components/AppContext';

const routes = {
  solve: 'SOLVE',
  constraints: 'CONSTRAINTS',
};

ReactDOM.createRoot(document.getElementById("root")).render((
  <AppProvider
    routes={routes}
    // defaultRoute={routes.solve}
    // defaultTilesetName="triangles"
    defaultRoute={routes.constraints}
    defaultTilesetName="terrain"
    defaultSize={100}
  >
    <App />
  </AppProvider>
));
