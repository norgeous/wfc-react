import { Space, Switch } from 'antd';
import useWFCGrid from '../hooks/useWFCGrid';
import useWFCCollapser from '../hooks/useWFCCollapser';

const Editor = ({ tileset, tileIds, Tile }) => {
  const {
    grid,
    getCellByXY,
    getCellNeighboursByXY,
    updateCellByXY,
  } = useWFCGrid({ w: 10, h: 10 });

  const { collapseSingle } = useWFCCollapser({
    tileset,
    getCellNeighboursByXY,
    updateCellByXY,
  });

  return (
    <>
      <button onClick={() => collapseSingle(5,5)}>collapseSingle</button>

      {tileIds.map(tileId => (
        <Space
          key={tileId}
          direction="vertical"
          style={{
            border: '1px solid red',
            padding: 10,
          }}
        >
          {tileId}

          <div style={{ position: 'relative' }}>
            <Tile
              key={tileId}
              tilesetName={tileset.name}
              valid={true}
              tileId={tileId}
              size={100}
              solveLevel={4}
            />
          </div>

          <Switch checked={true} />
        </Space>
      ))}
    </>
  );
};

export default Editor;