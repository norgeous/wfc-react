import tilesets from '../tilesets/index';
import useGrid from '../hooks/useGrid';
import Grid from './Grid';

const App = () => {
  const [tileset, setTileset] = React.useState(tilesets[0]);
  const [width, setWidth] = React.useState(12);
  const [height, setHeight] = React.useState(5);

  const {
    grid,
    collapse,
    collapseRandomHighEntropyCell
  } = useGrid({ tileset, width, height });

  if (!grid) return null;

  const handleChangeTileset = event => {
    setTileset(tilesets.find(({ name }) => name === event.target.value));
  };

  return (
    <div>
      <select value={tileset.name} onChange={handleChangeTileset}>
        {tilesets.map(({ name }) => <option key={name}>{name}</option>)}
      </select>
      <input type="number" value={width} onChange={event => setWidth(Number(event.target.value))} />
      <input type="number" value={height} onChange={event => setHeight(Number(event.target.value))} />
      <input type="number" onChange={collapseRandomHighEntropyCell} />
      <button onClick={collapseRandomHighEntropyCell}>collapse random</button>

      <Grid grid={grid} tileset={tileset} collapse={collapse} />
    </div>
  );
};

export default App;
