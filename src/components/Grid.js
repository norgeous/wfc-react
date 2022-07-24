import { GridContainer, Row } from './styled';
import Cell from './Cell';

const Grid = ({ grid, tileset, size, debug, collapse }) => (
  <GridContainer>
    {grid.map((row, y) => (
      <Row key={y}>
        {row.map((value, x) => (
          <Cell
            key={x}
            tileset={tileset}
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

export default Grid;
