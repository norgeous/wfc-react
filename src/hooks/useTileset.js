import React from 'react';
import { rotate4, unique } from '../utils';
import tilesets from '../tilesets/index';

// const unpackTileset = (newTilesetName) => {
const unpackTileset = (newTileset) => {
  // const newTileset = tilesets.find(({ name }) => name === newTilesetName);
  const { tileConfig } = newTileset;

  return {
    ...newTileset,
    tileConfig: tileConfig.map(({ pattern, rotate = false, weight = 1, enabled = true }) => ({
      pattern, rotate, weight, enabled,
    })),
  };
};

const useTileset = (defaultTilesetName) => {
  const [selectedTilesetName, setSelectedTilesetName] = React.useState(defaultTilesetName);
  const [tilesetsState, setTilesetsState] = React.useState(tilesets.map(unpackTileset));

  const updatePatternConfig = (tilesetName, targetPattern, newValues) => {
    const newState = tilesetsState.map(state => {
      if (state.name === tilesetName) return {
        ...state,
        tileConfig: state.tileConfig.map(config => {
          if (config.pattern === targetPattern) return {
            updated: true,
            ...config,
            ...newValues,
          };
          return config;
        }),
      };
      return state;
    });
    setTilesetsState(newState);
  };

  const tileset = tilesetsState.find(({ name }) => name === selectedTilesetName);

  const tiles =  tileset.tileConfig.reduce((acc, { pattern, rotate = false, weight = 1, enabled = true }) => {
    if (!enabled) return acc;
    const rotated = rotate ? rotate4(pattern).filter(unique) : [ pattern ];
    return [
      ...acc,
      ...rotated.map(p => ({
        pattern: p,
        weight,
      })),
    ];
  }, []);

  const points = tiles.map(tile => tile.pattern.split('')).flat().filter(unique).sort();

  return {
    tilesetNames: tilesetsState.map(({ name }) => name),
    setSelectedTilesetName,
    tileset,
    tiles,
    points,
    updatePatternConfig,
  };
};

export default useTileset;
