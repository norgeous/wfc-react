import { GridContainer, Row } from './styled';
import Cell from './Cell';

const Grid = ({ grid, tileset, tileIds, size, debug, collapse }) => {
  return (
    <GridContainer>
      {grid.map((row, y) => (
        <Row key={y}>
          {row.map((value, x) => (
            <Cell
              key={x}
              tileset={tileset}
              tileIds={tileIds}
              size={size}
              debug={debug}
              value={value}
              onClick={() => collapse(x, y)}
            />
          ))}
        </Row>
      ))}
    </GridContainer>
  );
};

export default Grid;
