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
    <Menu
      theme="dark"
      mode="horizontal"
      items={mainMenuItems}
      selectedKeys={[route]}
      onSelect={({ key }) => setRoute(key)}
    />
  );
};

export default AppHeader;
