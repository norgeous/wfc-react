import {
  Layout,
  Select,
  InputNumber,
  Button,
  Switch,
} from 'antd';

import tilesets from '../tilesets/index';
import useResize from '../hooks/useResize';
import useGrid from '../hooks/useGrid';
import Grid from './Grid';
import GithubCorner from './GithubCorner';

// antd elements
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const App = () => {
  const [tileset, setTileset] = React.useState(tilesets[2]);
  const [size, setSize] = React.useState(50);
  const [debug, setDebug] = React.useState(true);
  const [continual, setContinual] = React.useState(false);

  const { vw, vh } = useResize();

  console.log(vw,vh);

  const width = Math.floor(vw / size);
  const height = Math.floor(vh / size);

  const {
    grid,
    collapse,
    collapseRandomHighEntropyCell
  } = useGrid({
    tileset,
    width,
    height,
  });

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
    <Layout>
      <Header className="header">
        <h1>🌊 norgeous/wfc-react</h1>
      </Header>
      <Content>  
        <Layout>
          <Sider width={200}>
            <Layout style={{ padding: 20, gap: 20 }}>
              <Select value={tileset.name} onChange={handleChangeTileset}>
                {tilesets.map(({ name }) => <Option key={name}>{name}</Option>)}
              </Select>
              <InputNumber value={size} onChange={setSize} step={10} />
              <Switch checkedChildren="debug on" unCheckedChildren="debug off" checked={debug} onChange={setDebug} />
              <Switch checkedChildren="continual" unCheckedChildren="paused" checked={continual} onChange={setContinual} />
              <Button onClick={collapseRandomHighEntropyCell}>collapse next</Button>
            </Layout>
          </Sider>
          <Content>
            <Grid
              grid={grid}
              tileset={tileset}
              size={size}
              debug={debug}
              collapse={collapse}
            />
            <GithubCorner />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
