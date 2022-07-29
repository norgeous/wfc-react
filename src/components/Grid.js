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
      {/* <GridContainer2>
        {[...Array(45).keys()].map(v=> <div><div style={{position: 'absolute', transform: 'translate(-50%, -50%)', pointerEvents: 'auto', width: 30, height: 30, lineHeight: '30px', textAlign:'center', background: '#0ff2', cursor: 'pointer', borderRadius:'50%', color: 'black', fontSize: 10}}>{v}</div></div>)}
      </GridContainer2> */}
      <GridContainer2>
        {[...Array(45).keys()].map(v=> <div key={v}><Point>{v}</Point></div>)}
      </GridContainer2>
    </GridContainer>
  );
};

export default Grid;
