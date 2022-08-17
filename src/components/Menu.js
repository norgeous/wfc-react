import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Ol, Li } from '../styled-components/menu';

const Menu = () => {
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
    <Ol>
      {mainMenuItems.map(({key, label}) => (
        <Li
          selected={route === key}
          onClick={() => setRoute(key)}
        >
          {label}
        </Li>
      ))}
    </Ol>
  );
};

export default Menu;
