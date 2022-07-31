import { Space, Switch } from 'antd';
import GridDisplay from './GridDisplay';
import { useAppContext } from '../contexts/AppContext';

const ConstraintEditor = () => {
  const {
    tileset,
  } = useAppContext();

  const { tiles } = tileset;

  console.log(tiles);

  return (
    <>
      {tiles.map(({pattern, weight}) => (
        <Space
          key={pattern}
          direction="vertical"
          gap={20}
          style={{
            border: '1px solid #222',
            padding: 10,
            margin: 10,
          }}
        >
          <GridDisplay
            grid={[
              { x: 0, y: 0, v: pattern[0] },
              { x: 1, y: 0, v: pattern[1] },
              { x: 0, y: 1, v: pattern[3] },
              { x: 1, y: 1, v: pattern[2] },
            ]}
            getTileValue={() => pattern}
            width={1}
            height={1}
            size={100}
            tileset={tileset}
            debug={false}
            style={{ height: 'auto', padding: 20 }}
          />
          <div>Pattern: {pattern}</div>
          <div>Weight: {weight}</div>
          {/* <Space>
            Enabled
            <Switch checked={true} />
          </Space> */}
        </Space>
      ))}

    </>
  );
};

export default ConstraintEditor;
