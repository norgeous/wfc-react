import {
  Layout,
  Menu,
  Space,
  Radio,
  InputNumber,
  Button,
  // Switch,
  Spin,
} from 'antd';

import tilesets from '../tilesets/index';
import useResize from '../hooks/useResize';
// import useRawGrid from '../hooks/useRawGrid';
// import useGrid from '../hooks/useGrid';
// import useDomainSizes from '../hooks/useDomainSizes';
import useWFCGrid from '../hooks/useWFCGrid';
import useWFCCollapser from '../hooks/useWFCCollapser';
// import Grid from './Grid';
import Grid2 from './Grid2';
// import GridDebug from './GridDebug';
import TileModal from './TileModal';

import { rotate4, unique } from '../utils';

const { Header, Content, Sider } = Layout;

const routes = {
  solve: 'SOLVE',
  constraints: 'CONSTRAINTS',
  // generatorOld: 'GENERATOR_OLD',
  // tileEditor: 'EDITOR',
};

const mainMenuItems = Object.entries(routes).map(([key, value]) => ({
  key: value,
  label: key,
}));

const App = () => {
  const [route, setRoute] = React.useState(routes.solve);
  const [tileset, setTileset] = React.useState(tilesets[0]);
  const [size, setSize] = React.useState(100);
  // const [debug, setDebug] = React.useState(false);

  const [continual, setContinual] = React.useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const { vw, vh } = useResize();

  const width = Math.floor(vw / size);
  const height = Math.floor(vh / size);

  const tileIds = tileset.patterns.map(rotate4).flat().filter(unique);

  // const { rawGrid, tileIds, collapseSingle, collapse, reset } = useRawGrid({ tileset, width, height });
  // const { grid } = useGrid({ rawGrid });
  // const { domainSizes, collapseRandomHighEntropyCell } = useDomainSizes({ grid, collapse });

  const {
    grid,
    // getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
  } = useWFCGrid({ w: width+1, h: height+1 });

  const { collapseSingle, collapse4 } = useWFCCollapser({
    tileset,
    getCellNeighboursByXY,
    updateCellByXY,
  });


  
  // React.useEffect(() => {
  //   if (continual) {
  //     const t = setInterval(() => {
  //       collapseRandomHighEntropyCell();
  //     }, 100);
  //     return () => clearInterval(t);
  //   }
  // }, [continual, collapseRandomHighEntropyCell]);

  // React.useEffect(() => {
  //   if (domainSizes.length === 0) {
  //     setContinual(false);
  //   }
  // }, [domainSizes]);

  const handleChangeTileset = value => {
    setTileset(tilesets.find(({ name }) => name === value));
  };

  const { Tile } = tileset;

  return (
    <Layout>
      <Header className="header" style={{ padding: '0 20px' }}>
        <a href="https://github.com/norgeous/wfc-react" style={{ float: 'left', paddingRight: '20px' }}>
          <h1>
            🌊 norgeous/wfc-react
          </h1>
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          items={mainMenuItems}
          selectedKeys={[route]}
          onSelect={({ key }) => setRoute(key)}
        />
      </Header>
      <Content>  
        <Layout>
          <Sider width={200}>
            <Layout style={{ padding: 20, gap: 20 }}>
              <Radio.Group value={tileset.name} onChange={event => handleChangeTileset(event.target.value)}>
                {tilesets.map(({ name }) => <div key={name}><Radio value={name}>{name}</Radio></div>)}
              </Radio.Group>
              <Space>
                Size
                <InputNumber value={size} onChange={setSize} step={10} /> px
              </Space>
              {`${width}×${height}`}
              {/* <Button onClick={collapseRandomHighEntropyCell}>
                Collapse next
              </Button> */}
              <Button onClick={toggleContinual} >
                <Space>
                  Collapse all 
                  {continual && <Spin size="small" />}
                </Space>
              </Button>
              {/* <Button onClick={reset}>Reset</Button> */}
              {/* <GridDebug
                tileset={tileset}
                rawGrid={rawGrid}
                collapseSingle={collapseSingle}
              /> */}
              {/* <Space>
                Debug
                <Switch
                  checkedChildren="on"
                  unCheckedChildren="off"
                  checked={debug}
                  onChange={setDebug}
                />
              </Space> */}
            </Layout>
          </Sider>
          <Content>
            {route === routes.solve && (
              <Grid2
                grid={grid}
                width={width}
                height={height}
                tileset={tileset}
                tileIds={tileIds}
                size={size}
                // debug={debug}
                getTileValue={getTileValue}
                // collapse={collapse}
                collapseSingle={collapseSingle}
                collapse4={collapse4}
              />
            )}

            {/* {route === routes.generatorOld && (
              <Grid
                grid={grid}
                tileset={tileset}
                tileIds={tileIds}
                size={size}
                debug={debug}
                collapse={collapse}
              />
            )} */}

            {route === routes.tileEditor && (
              <TileModal
                tileset={tileset}
                tileIds={tileIds}
                Tile={Tile}
              />
            )}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
