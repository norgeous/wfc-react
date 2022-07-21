import { Select, InputNumber, Button } from 'antd';
import tilesets from '../tilesets/index';
import useGrid from '../hooks/useGrid';
import Grid from './Grid';

const { Option } = Select;

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

  const handleChangeTileset = value => {
    setTileset(tilesets.find(({ name }) => name === value));
  };

  return (
    <div>
      <Select value={tileset.name} onChange={handleChangeTileset}>
        {tilesets.map(({ name }) => <Option key={name}>{name}</Option>)}
      </Select>
      <InputNumber value={width} onChange={value => setWidth(value)} />
      <InputNumber value={height} onChange={value => setHeight(value)} />
      <Button onClick={collapseRandomHighEntropyCell}>collapseRandomHighEntropyCell</Button>

      <Grid grid={grid} tileset={tileset} collapse={collapse} />
    </div>
  );
};

export default App;
