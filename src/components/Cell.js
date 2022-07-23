import {
  Item,
  Status,
  Domain,
  Top,
  Right,
  Bottom,
  Left
} from './styled';

const Cell = ({ tileset, size, value, onClick, ...props }) => {
  const bits = (value ? value.split('') : ['?','?','?','?'])
    .map(v => v === '*' ? '✧' : v);

  const { Tile } = tileset;
  return (
    <Item onClick={onClick} {...props}>
      <Top>{bits[0]}</Top>
      <Right>{bits[1]}</Right>
      <Bottom>{bits[2]}</Bottom>
      <Left>{bits[3]}</Left>
      <Status>
        <Domain>
          {[...value].reduce((count, char) => char === '*' ? count + 1 : count, 0)}
        </Domain>
      </Status>
      <Tile tileId={value} size={size}/>
    </Item>
  );
};

export default Cell;
