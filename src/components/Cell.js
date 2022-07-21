import { randomFrom } from '../utils';
import {
  Item,
  Status,
  Domain,
  Top,
  Right,
  Bottom,
  Left
} from './styled';

const labelToChar = (tiles, label) => randomFrom(tiles[label]);

const Cell = ({ tileset, value, onClick, ...props }) => {
  const bits = value ? value.split('') : ['?','?','?','?'];
  return (
    <Item onClick={onClick} {...props}>
      <Top>{bits[0]}</Top>
      <Right>{bits[1]}</Right>
      <Bottom>{bits[2]}</Bottom>
      <Left>{bits[3]}</Left>
      <Status>
        {value}
        <Domain>{[...value].reduce((count, char) => char === '*' ? count + 1 : count, 0)}</Domain>
      </Status>
      {value.includes('*') ? '·' : labelToChar(tileset.tiles, value)}
    </Item>
  );
};

export default Cell;
