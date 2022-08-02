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
    <div>
      tiles: {tiles.length}
      <br/>
      points: {points.join()}
      <br/>
      grid tiles: {`${width}×${height}`} ({width*height})
      <br/>
      grid points: {`${width+1}×${height+1}`} ({grid.length})
    </div>
  );
};

export default DebugInfo;
