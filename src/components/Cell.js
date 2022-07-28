import { Item } from './styled';

import CellDebug from './CellDebug';

const Cell = ({ tileset, tileIds, size, debug, value, onClick, ...props }) => {
  const solveLevel = 4 - [...value].filter(d => d === '*').length;
  const valid = value.includes('*') || tileIds.includes(value);
  const { Tile } = tileset;

  return (
    <Item onClick={onClick} debug={debug} value={value} {...props}>
      {debug && <CellDebug value={value} />}
      <Tile
        tilesetName={tileset.name}
        patterns={tileset.patterns}
        valid={valid}
        tileId={value}
        size={size}
        solveLevel={solveLevel}
      />
    </Item>
  );
};

export default Cell;
