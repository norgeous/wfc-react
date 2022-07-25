import { Item } from './styled';

import CellDebug from './CellDebug';

const Cell = ({ tileset, size, debug, value, onClick, ...props }) => {
  const { Tile } = tileset;
  return (
    <Item onClick={onClick} {...props}>
      {debug && <CellDebug value={value} />}
      <Tile tileId={value} size={size}/>
    </Item>
  );
};

export default Cell;
