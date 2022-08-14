import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const Menu = () => <nav>menu goes here</nav>;

const AppHeader = () => {
  const {
    route,
    routes,
    setRoute,
  } = useAppContext();

  const mainMenuItems = Object.entries(routes).map(([key, value]) => ({
    key: value,
    label: key,
  }));

  return (
    <div style={{ padding: '0 20px' }}>
      <a href="https://github.com/norgeous/wfc-react" style={{ float: 'left', paddingRight: '20px' }}>
        <h1>
          🌊 norgeous/wfc-react
        </h1>
      </a>
      <Menu
        theme="dark"
        mode="horizontal"
        items={mainMenuItems}
        selectedKeys={[route]}
        onSelect={({ key }) => setRoute(key)}
      />
    </div>
  );
};

export default AppHeader;
