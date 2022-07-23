import { Select, InputNumber, Button, Switch } from 'antd';
import tilesets from '../tilesets/index';
import useGrid from '../hooks/useGrid';
import Grid from './Grid';

const { Option } = Select;

const App = () => {
  const [tileset, setTileset] = React.useState(tilesets[2]);
  const [size, setSize] = React.useState(50);
  const [width, setWidth] = React.useState(38);
  const [height, setHeight] = React.useState(16);
  const [debug, setDebug] = React.useState(true);
  const [continual, setContinual] = React.useState(false);

  const {
    grid,
    collapse,
    collapseRandomHighEntropyCell
  } = useGrid({ tileset, width, height });

  React.useEffect(() => {
    if (continual) {
      const t = setInterval(() => {
        collapseRandomHighEntropyCell();
      }, 1);
      return () => clearInterval(t);
    }
  }, [continual]);

  if (!grid) return null;

  const handleChangeTileset = value => {
    setTileset(tilesets.find(({ name }) => name === value));
  };


  return (
    <div>
      <Select value={tileset.name} onChange={handleChangeTileset}>
        {tilesets.map(({ name }) => <Option key={name}>{name}</Option>)}
      </Select>
      <InputNumber value={size} onChange={setSize} step={10} />
      <InputNumber value={width} onChange={setWidth} />
      <InputNumber value={height} onChange={setHeight} />
      <Button onClick={collapseRandomHighEntropyCell}>collapseRandomHighEntropyCell</Button>
      <Switch checkedChildren="debug on" unCheckedChildren="debug off" checked={debug} onChange={setDebug} />
      <Switch checkedChildren="continual" unCheckedChildren="paused" checked={continual} onChange={setContinual} />

      <Grid
        grid={grid}
        tileset={tileset}
        size={size}
        debug={debug}
        collapse={collapse}
      />
    </div>
  );
};

export default App;
