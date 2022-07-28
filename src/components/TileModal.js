import { Space, Switch } from 'antd';

const TileModal = ({ tileset, tileIds, Tile }) => {
  return (
    <>
      {tileIds.map(tileId => (
        <Space
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

export default TileModal;