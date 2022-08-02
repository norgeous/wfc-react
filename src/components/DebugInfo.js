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
      valid tiles: {tiles.length}
      <br/>
      points: {points.join()}
      <br/>
      tiles: {`${width}×${height}`} ({width*height})
      <br/>
      points: {`${width+1}×${height+1}`} ({grid.length})
    </div>
  );
};

export default DebugInfo;
