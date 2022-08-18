import React from 'react';
import Input from './FormInput';
import GridDisplay from './GridDisplay';
import { Table, Tr, Th, Td, FlexContents } from '../styled-components/table';
import { useAppContext } from '../contexts/AppContext';
import { rotate4, unique } from '../utils';

const ConstraintEditor = () => {
  const {
    tileset,
    tiles,
    updatePatternConfig,
  } = useAppContext();

  const { tileConfig } = tileset;

  return (
    <div>
      <Table>
        <Tr>
          <Th>Pattern</Th>
          <Th>Enabled</Th>
          <Th>Rotate</Th>
          <Th>Weight</Th>
          <Th>Tile(s)</Th>
        </Tr>
        {tileConfig.map(({ pattern, rotate, weight, enabled }) => (
          <Tr key={pattern}>
            <Td>
              {pattern}
            </Td>
            <Td>
              <Input
                type="checkbox"
                checked={enabled}
                onChange={event => updatePatternConfig(tileset.name, pattern, { enabled: event.target.checked })}
              />
            </Td>
            <Td>
              <Input
                type="checkbox"
                checked={rotate}
                onChange={event => updatePatternConfig(tileset.name, pattern, { rotate: event.target.checked })}
              />
            </Td>
            <Td>
              <Input
                type="number"
                value={weight}
                onChange={event => updatePatternConfig(tileset.name, pattern, { weight: event.target.value })}
                min={0}
              />
            </Td>
            <Td>
              <FlexContents>
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
              </FlexContents>
            </Td>
          </Tr>
        ))}
      </Table>
    </div>
  );
};

export default ConstraintEditor;
