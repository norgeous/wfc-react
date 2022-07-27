import {
  Layout,
  Space,
  Radio,
  InputNumber,
  Button,
  Switch,
  Spin,
} from 'antd';

import tilesets from '../tilesets/index';
import useResize from '../hooks/useResize';
import useRawGrid from '../hooks/useRawGrid';
import useGrid from '../hooks/useGrid';
import useDomainSizes from '../hooks/useDomainSizes';
import Grid from './Grid';
import GithubCorner from './GithubCorner';

// antd elements
const { Header, Content, Sider } = Layout;

const App = () => {
  const [tileset, setTileset] = React.useState(tilesets[0]);
  const [size, setSize] = React.useState(100);
  const [debug, setDebug] = React.useState(false);

  const [continual, setContinual] = React.useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const { vw, vh } = useResize();

  const width = Math.floor(vw / size);
  const height = Math.floor(vh / size);

  const { rawGrid, collapseSingle, collapse, reset } = useRawGrid({ tileset, width, height });
  const { grid } = useGrid({ rawGrid });
  const { domainSizes, collapseRandomHighEntropyCell } = useDomainSizes({ grid, collapse });
  
  React.useEffect(() => {
    if (continual) {
      const t = setInterval(() => {
        collapseRandomHighEntropyCell();
      }, 100);
      return () => clearInterval(t);
    }
  }, [continual, collapseRandomHighEntropyCell]);

  React.useEffect(() => {
    if (domainSizes.length === 0) {
      setContinual(false);
    }
  }, [domainSizes]);

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
              <Radio.Group value={tileset.name} onChange={event => handleChangeTileset(event.target.value)}>
                {tilesets.map(({ name }) =><Radio key={name} value={name}>{name}</Radio>)}
              </Radio.Group>
              <Space>
                Size
                <InputNumber value={size} onChange={setSize} step={10} />
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
              <GridDebug tileset={tileset} rawGrid={rawGrid} collapseSingle={collapseSingle} />
              <Space>
                Debug
                <Switch checkedChildren="on" unCheckedChildren="off" checked={debug} onChange={setDebug} />
              </Space>
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
