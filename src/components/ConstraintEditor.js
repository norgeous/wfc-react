import React from 'react';
import Input from './FormInput';
import GridDisplay from './GridDisplay';
import { useAppContext } from '../contexts/AppContext';
import { rotate4, unique } from '../utils';

const Table = () => 'TABLE';

const ConstraintEditor = () => {
  const {
    tileset,
    tiles,
    updatePatternConfig,
  } = useAppContext();

  const { tileConfig } = tileset;

  return (
    <>
      <Table
        style={{padding: 20}}
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
            render: (_, { pattern, enabled = true }) => (
              <Input type="checkbox" checked={enabled} onChange={(newEnabled) => updatePatternConfig(tileset.name, pattern, { enabled: newEnabled })} />
            ),
          },
          {
            title: 'Rotate',
            key: 'rotate',
            render: (_, { pattern, rotate = false }) => (
              <Input type="checkbox" checked={rotate} onChange={(newRotate) => updatePatternConfig(tileset.name, pattern, { rotate: newRotate })} />
            ),
          },
          {
            title: 'Weight',
            key: 'weight',
            render: (_, { pattern, weight = 1 }) => (
              <Input type="number" value={weight} onChange={(newWeight) => updatePatternConfig(tileset.name, pattern, { weight: newWeight })} min={0} />
            ),
          },
          {
            title: 'Tile(s)',
            key: 'tiles',
            render: (_, { rotate = false, pattern }) => (
              <Space>
                {rotate ? rotate4(pattern).filter(unique).map(tile => (
                  <GridDisplay
                    key={tile}
                    grid={[
                      { x: 0, y: 0, v: tile[0] },
                      { x: 1, y: 0, v: tile[1] },
                      { x: 0, y: 1, v: tile[3] },
                      { x: 1, y: 1, v: tile[2] },
                    ]}
                    tileGrid={[
                      { x: 0, y: 0, solveLevel: 4, valid: true, tileValue: tile },
                    ]}
                    getTileValue={() => tile}
                    width={1}
                    height={1}
                    size={30}
                    tileset={tileset}
                    tiles={tiles}
                    debug={false}
                    style={{ height: 'auto', border: '1px solid #222' }}
                  />
                )) : (
                  <GridDisplay
                    grid={[
                      { x: 0, y: 0, v: pattern[0] },
                      { x: 1, y: 0, v: pattern[1] },
                      { x: 0, y: 1, v: pattern[3] },
                      { x: 1, y: 1, v: pattern[2] },
                    ]}
                    tileGrid={[
                      { x: 0, y: 0, solveLevel: 4, valid: true, tileValue: pattern },
                    ]}
                    getTileValue={() => pattern}
                    width={1}
                    height={1}
                    size={30}
                    tileset={tileset}
                    tiles={tiles}
                    debug={false}
                    style={{ height: 'auto', border: '1px solid #222' }}
                  />
                )}
              </Space>
            ),
          },
        ]}
      />



    </>
  );
};

export default ConstraintEditor;
