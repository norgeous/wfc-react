import useGrid from '../hooks/useGrid';
import Grid from './Grid';
import { Domain } from './styled';

const App = () => {
  const [width, setWidth] = React.useState(12);
  const [height, setHeight] = React.useState(5);
  const {
    grid,
    collapseRandomHighEntropyCell,
  } = useGrid({ width, height });

  if (!grid) return null;

  return (
    <div>
      <input type="number" value={width} onChange={event => setWidth(Number(event.target.value))} />
      <input type="number" value={height} onChange={event => setHeight(Number(event.target.value))} />
      <input type="number" onChange={collapseRandomHighEntropyCell} />
      <button onClick={collapseRandomHighEntropyCell}>collapse random</button>

      <Grid grid={grid} />
      <Domain>{typeof Grid}</Domain>
    </div>
  );
};

export default App;
