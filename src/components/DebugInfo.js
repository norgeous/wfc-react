import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const DebugInfo = () => {
  const {
    tiles,
    points,
    width,
    height,
    grid,
  } = useAppContext();

  return (
    <div style={{fontSize: 10}}>
      tiles: {tiles.length}
      <br/>
      points: {points.join()}
      <br/>
      grid points: {`${width+1}×${height+1}`} ({grid.length})
      <br/>
      grid tiles: {`${width}×${height}`} ({width*height})
    </div>
  );
};

export default DebugInfo;
