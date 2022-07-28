import { GridContainer, GridContainer2, Row } from './styled';
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
        {[...Array(45).keys()].map(v=> <div><div style={{position: 'absolute', transform: 'translate(-50%, -50%)', pointerEvents: 'auto', width: 20, height: 20, lineHeight: '20px', textAlign:'center', background: '#0ff2', cursor: 'pointer', borderRadius:'50%', color: 'black', fontSize: 10}}>{v}</div></div>)}
      </GridContainer2>
    </GridContainer>
  );
};

export default Grid;
