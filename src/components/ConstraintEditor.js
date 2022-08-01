import {
  Table,
  Space,
  Switch,
  InputNumber,
} from 'antd';
import GridDisplay from './GridDisplay';
import { useAppContext } from '../contexts/AppContext';
import { rotate4, unique } from '../utils';

const ConstraintEditor = () => {
  const {
    tileset,
  } = useAppContext();

  const { tileConfig } = tileset;

  // console.log(tileset);

  return (
    <>
      <Table
        pagination={{ pageSize: 100, hideOnSinglePage: true }}
        dataSource={tileConfig.map((config,i) => ({ ...config, key: i }))}
        columns={[
          {
            title: 'Pattern',
            dataIndex: 'pattern',
            key: 'pattern',
          },
          {
            title: 'Enabled',
            key: 'enabled',
            render: (_, record) => (
              <Switch checked={record.enabled === false ? false : true} />
            ),
          },
          {
            title: 'Rotate',
            key: 'rotate',
            render: (_, record) => (
              <Switch checked={record.rotate} />
            ),
          },
          {
            title: 'Weight',
            key: 'weight',
            render: (_, record) => (
              <InputNumber value={record.weight} />
            ),
          },
          {
            title: 'Tile(s)',
            key: 'tiles',
            render: (_, record) => (
              <Space>
                {record.rotate ? rotate4(record.pattern).filter(unique).map(tile => (
                  <GridDisplay
                    grid={[
                      { x: 0, y: 0, v: tile[0] },
                      { x: 1, y: 0, v: tile[1] },
                      { x: 0, y: 1, v: tile[3] },
                      { x: 1, y: 1, v: tile[2] },
                    ]}
                    getTileValue={() => tile}
                    width={1}
                    height={1}
                    size={100}
                    tileset={tileset}
                    debug={false}
                    style={{ height: 'auto', border: '1px solid #222' }}
                  />
                )) : (
                  <GridDisplay
                    grid={[
                      { x: 0, y: 0, v: record.pattern[0] },
                      { x: 1, y: 0, v: record.pattern[1] },
                      { x: 0, y: 1, v: record.pattern[3] },
                      { x: 1, y: 1, v: record.pattern[2] },
                    ]}
                    getTileValue={() => record.pattern}
                    width={1}
                    height={1}
                    size={100}
                    tileset={tileset}
                    debug={false}
                    style={{ height: 'auto', border: '1px solid #222' }}
                  />
                )}
              </Space>
            ),
          }
        ]}
      />



    </>
  );
};

export default ConstraintEditor;
