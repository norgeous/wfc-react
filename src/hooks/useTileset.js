import { rotate4, unique } from '../utils';
import tilesets from '../tilesets/index';

const unpackTileset = (newTilesetName) => {
  const newTileset = tilesets.find(({ name }) => name === newTilesetName);
  const { tileConfig } = newTileset;

  const tiles =  tileConfig.reduce((acc, { pattern, rotate = false, weight = 1, enabled = true }) => {
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

  return {
    ...newTileset,
    tiles,
  };
};

const useTileset = (defaultTilesetName) => {
  const [tileset, setTileset] = React.useState(unpackTileset(defaultTilesetName));
  const setTilesetByName = newTilesetName => setTileset(unpackTileset(newTilesetName));
  return {
    tileset,
    tilesetNames: tilesets.map(({ name }) => name),
    setTilesetByName,
  };
};

export default useTileset;
