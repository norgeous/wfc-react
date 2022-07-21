import tiles from './tilesets/ascii-tileset';

// arrays are objects too!
export const randomFrom = (obj = {}) => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

export const randomLabel = () => randomFrom(Object.keys(tiles));

export const labelToChar = (label) => randomFrom(tiles[label]);




