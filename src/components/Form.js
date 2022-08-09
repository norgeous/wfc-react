import {
  Layout,
  Space,
  Radio,
  InputNumber,
  Button,
  Switch,
  Spin,
} from 'antd';

import { useAppContext } from '../contexts/AppContext';
import DebugInfo from './DebugInfo';

const Form = () => {
  const {
    tilesetNames,
    setSelectedTilesetName,
    
    tileset,

    size,
    setSize,

    fps,
    setFPS,

    reset,
    randomize,

    collapseLowestEntropy,

    continual,
    toggleContinual,

    debug,
    setDebug,
  } = useAppContext();

  return (
    <Layout style={{ padding: 20, gap: 20, height: '100%' }}>
      <Radio.Group value={tileset.name} onChange={event => setSelectedTilesetName(event.target.value)}>
        {tilesetNames.map(name => <div key={name}><Radio value={name}>{name}</Radio></div>)}
      </Radio.Group>

      <Button onClick={randomize}>Randomize</Button>

      <Button onClick={collapseLowestEntropy}>Collapse Next</Button>

      <Button onClick={toggleContinual}>
        <Space>
          Solve All 
          {continual && <Spin size="small" />}
        </Space>
      </Button>

      <Button onClick={reset}>Reset</Button>

      <Space>
        Tile Size
        <InputNumber style={{ width: 70 }} value={size} onChange={setSize} step={5} min={25} /> px
      </Space>

      <Space>
        Speed
        <InputNumber style={{ width: 70 }} value={fps} onChange={setFPS} step={5} min={1} max={1000} /> fps
      </Space>

      <Space>
        Debug
        <Switch
          checkedChildren="on"
          unCheckedChildren="off"
          checked={debug}
          onChange={setDebug}
        />
      </Space>

      <DebugInfo />
    </Layout>
  );
};

export default Form;
