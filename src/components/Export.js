import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const Export = () => {
  const { grid } = useAppContext();

  const exportText = Object.values(grid.reduce((acc, point) => {
    return {
      ...acc,
      [point.y]: `${acc[point.y] || ''} ${point.v}`,
    };
  }, {})).join('\n');

  return <pre>{exportText}</pre>;
};

export default Export;
