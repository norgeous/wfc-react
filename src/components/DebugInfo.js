import { useAppContext } from '../contexts/AppContext';

const DebugInfo = () => {
  const {
    tileset,
    width,
    height,
    grid,
  } = useAppContext();

  return (
    <>
      <div>valid tiles: {tileset.tiles.length}</div>
      <div>tiles: {`${width}×${height}`} ({width*height})</div>
      <div>points: {`${width+1}×${height+1}`} ({grid.length})</div>
    </>
  );
};

export default DebugInfo;
