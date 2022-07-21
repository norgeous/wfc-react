import { GridContainer, Row } from './styled';
import Cell from './Cell';

const Grid = ({ grid }) => (
  <GridContainer>
    {grid.map((row, y) => (
      <Row key={y}>
        {row.map((value, x) => (
          <Cell
            key={x}
            value={value}
            onClick={() => collapse(x,y)}
          />
        ))}
      </Row>
    ))}
  </GridContainer>
);

export default Grid;
