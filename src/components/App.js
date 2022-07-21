import useGrid from '../hooks/useGrid';
import Grid from './Grid';

const App = () => {
  const [width, setWidth] = React.useState(12);
  const [height, setHeight] = React.useState(5);
  const {
    grid,
    collapse,
    collapseRandomHighEntropyCell,
  } = useGrid({ width, height });

  if (!grid) return null;

  return (
    <div>
      <input type="number" value={width} onChange={event => setWidth(Number(event.target.value))} />
      <input type="number" value={height} onChange={event => setHeight(Number(event.target.value))} />
      <input type="number" onChange={collapseRandomHighEntropyCell} />
      <button onClick={collapseRandomHighEntropyCell}>collapse random</button>

      <Grid grid={grid} collapse={collapse} />
    </div>
  );
};

export default App;
