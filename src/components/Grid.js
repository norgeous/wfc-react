import React from 'react';
import GridDisplay from './GridDisplay';
import { useAppContext } from '../contexts/AppContext';

const Grid = () => {
  const {
    grid,
    tileGrid,
    width,
    height,
    size,
    getTileValue,
    tileset,
    tiles,
    collapseSingle,
    collapse4,
    debug,
  } = useAppContext();

  return (
    <GridDisplay
      grid={grid}
      tileGrid={tileGrid}
      width={width}
      height={height}
      size={size}
      getTileValue={getTileValue}
      tileset={tileset}
      tiles={tiles}
      collapseSingle={collapseSingle}
      collapse4={collapse4}
      debug={debug}
    />
  );
};

export default Grid;
