import { Item } from './styled';

import CellDebug from './CellDebug';

const Cell = ({ tileset, size, debug, value, onClick, ...props }) => {
  const solveLevel = 4 - [...value].filter(d => d === '*').length;
  const { Tile } = tileset;
  return (
    <Item onClick={onClick} debug={debug} {...props}>
      {debug && <CellDebug value={value} />}
      <Tile
        tileId={value}
        size={size}
        solveLevel={solveLevel}
      />
    </Item>
  );
};

export default Cell;
