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

    reset,
    randomize,

    collapseLowestEntropy,

    continual,
    toggleContinual,

    debug,
    setDebug,
  } = useAppContext();

  return (
    <Layout style={{ padding: 20, gap: 20 }}>
      <Radio.Group value={tileset.name} onChange={event => setSelectedTilesetName(event.target.value)}>
        {tilesetNames.map(name => <div key={name}><Radio value={name}>{name}</Radio></div>)}
      </Radio.Group>

      <Space>
        Size
        <InputNumber value={size} onChange={setSize} step={10} min={30} /> px
      </Space>

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
