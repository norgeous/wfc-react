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
import useRawGrid from '../hooks/useRawGrid';
import useGrid from '../hooks/useGrid';
import useDomainSizes from '../hooks/useDomainSizes';
import Grid from './Grid';
import GithubCorner from './GithubCorner';

// antd elements
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const App = () => {
  const [tileset, setTileset] = React.useState(tilesets[4]);
  const [size, setSize] = React.useState(100);
  const [debug, setDebug] = React.useState(false);

  const [continual, setContinual] = React.useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const { vw, vh } = useResize();

  const width = Math.floor(vw / size);
  const height = Math.floor(vh / size);

  const { rawGrid, collapse, reset } = useRawGrid({ tileset, width, height });
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
              <Select value={tileset.name} onChange={handleChangeTileset}>
                {tilesets.map(({ name }) => <Option key={name}>{name}</Option>)}
              </Select>
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
              <pre style={{lineHeight: '12px', textAlign: 'center', overflow: 'hidden'}}>
                {rawGrid?.map(row => row.join('')).join('\n')}
              </pre>
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
