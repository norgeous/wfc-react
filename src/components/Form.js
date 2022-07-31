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
import { useAppContext } from './AppContext';
// import { useTileset } from './TilesetContext';

const Form = () => {
  const {
    tileset,
    tilesetNames,
    setTilesetByName,

    size,
    setSize,

    width,
    height,

    reset,
    randomize,
  } = useAppContext();

  const continual = false;
  const toggleContinual = () => {};

  return (
    <Layout style={{ padding: 20, gap: 20 }}>
      <Radio.Group value={tileset.name} onChange={event => setTilesetByName(event.target.value)}>
        {tilesetNames.map(name => <div key={name}><Radio value={name}>{name}</Radio></div>)}
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
      <Button onClick={randomize}>Randomize</Button>
      <Button onClick={reset}>Reset</Button>
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
  );
};

export default Form;
