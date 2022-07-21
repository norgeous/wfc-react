import { Grid, Row } from './grid';
import useGrid from '../hooks/useGrid';
import Cell from './Cell';

const App = () => {
  const [width, setWidth] = React.useState(12);
  const [height, setHeight] = React.useState(5);
  const {
    grid,
    collapse,
    collapseRandomHighEntropyCell,
  } = useGrid({ width, height });
  const [step, setStep] = React.useState(0);

  if (!grid) return null;
  return (
    <div>
      <input type="number" value={width} onChange={event => setWidth(Number(event.target.value))} />
      <input type="number" value={height} onChange={event => setHeight(Number(event.target.value))} />
      <input type="number" value={step} onChange={collapseRandomHighEntropyCell} />
      <button onClick={collapseRandomHighEntropyCell}>collapse random</button>

      <Grid>
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
      </Grid>
    </div>
  );
};

export default App;
