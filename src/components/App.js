import {
  Layout,
  Space,
  Select,
  InputNumber,
  Button,
  Switch,
  Spin,
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
  const [tileset, setTileset] = React.useState(tilesets[3]);
  const [size, setSize] = React.useState(50);
  const [debug, setDebug] = React.useState(false);

  const [continual, setContinual] = React.useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const { vw, vh } = useResize();

  const width = Math.floor(vw / size);
  const height = Math.floor(vh / size);

  const {
    grid,
    collapse,
    collapseRandomHighEntropyCell,
    reset,
  } = useGrid({
    tileset,
    width,
    height,
  });

  React.useEffect(() => {
    if (continual) {
      const t = setInterval(() => {
        collapseRandomHighEntropyCell();
      }, 50);
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
              <Space>
                Size
                <InputNumber value={size} onChange={setSize} step={10} />
              </Space>
              <Space>
                Debug
                <Switch checkedChildren="on" unCheckedChildren="off" checked={debug} onChange={setDebug} />
              </Space>
              <Button onClick={collapseRandomHighEntropyCell}>
                Collapse next
              </Button>
              <Button onClick={toggleContinual} >
                <Space>
                  Collapse all 
                  {continual && <Spin size="small" />}
                </Space>
              </Button>
              <Button onClick={reset}>Reset</Button>
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
