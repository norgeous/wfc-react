import { Space, Switch } from 'antd';

const Editor = ({ tileset, tileIds, Tile }) => {


  return (
    <>

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

      <button onClick={() => collapseSingle(5,5)}>collapseSingle</button>

    </>
  );
};

export default Editor;