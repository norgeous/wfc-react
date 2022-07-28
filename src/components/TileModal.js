import { Button, Modal, Space, Switch } from 'antd';
// import React, { useState } from 'react';

const TileModal = ({ tileset, tileIds, Tile }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Tile Editor
      </Button>
      <Modal title="Tile Editor" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
      </Modal>
    </>
  );
};

export default TileModal;