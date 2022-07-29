import { GridContainer, GridContainer2, Row, Point } from './styled';
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
      <GridContainer2>
        {[...Array(45).keys()].map(v=> <div key={v}><Point>{v}</Point></div>)}
      </GridContainer2>
    </GridContainer>
  );
};

export default Grid;
