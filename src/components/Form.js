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
    tileset,
    tilesetNames,
    setTilesetByName,

    size,
    setSize,

    reset,
    randomize,

    continual,
    toggleContinual,

    debug,
    setDebug,
  } = useAppContext();

  // React.useEffect(() => {
  //   if (continual) {
  //     const t = setInterval(() => {
  //       collapseRandomHighEntropyCell();
  //     }, 100);
  //     return () => clearInterval(t);
  //   }
  // }, [continual, collapseRandomHighEntropyCell]);

  return (
    <Layout style={{ padding: 20, gap: 20 }}>
      <Radio.Group value={tileset.name} onChange={event => setTilesetByName(event.target.value)}>
        {tilesetNames.map(name => <div key={name}><Radio value={name}>{name}</Radio></div>)}
      </Radio.Group>

      <Space>
        Size
        <InputNumber value={size} onChange={setSize} step={10} min={30} /> px
      </Space>

      {/* <Button onClick={collapseRandomHighEntropyCell}>
        Collapse next
      </Button> */}

      <Button onClick={toggleContinual} >
        <Space>
          Solve All 
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
