import { randomFrom } from '../utils';

const tileMatcher = constraint => tileId => [
  (constraint[0] === '*' || constraint[0] === tileId[0]),
  (constraint[1] === '*' || constraint[1] === tileId[1]),
  (constraint[2] === '*' || constraint[2] === tileId[2]),
  (constraint[3] === '*' || constraint[3] === tileId[3]),
].every(check => check === true);

const getCell = (rawGrid, x, y) => {
  const points = [
    rawGrid[y][x],
    rawGrid[y][x+1],
    rawGrid[y+1][x+1],
    rawGrid[y+1][x],
  ];

  return points.join('');
}

const updateCell = (rawGrid, x, y, tile) => {
  const newRawGrid = [...rawGrid.map(row => [...row])];
  newRawGrid[y][x] = tile[0];
  newRawGrid[y][x+1] = tile[1];
  newRawGrid[y+1][x+1] = tile[2];
  newRawGrid[y+1][x] = tile[3];

  return newRawGrid;
}








const unique = (value, index, self) => self.indexOf(value) === index;

const arrayRotate = (arr) => {
  // arr.push(arr.shift());
  arr.unshift(arr.pop())
  return arr;
}

const rotate4 = (arr) => {
  const r1 = arrayRotate([...arr]);
  const r2 = arrayRotate([...r1]);
  const r3 = arrayRotate([...r2]);
  return [
    arr,
    r1.join(''),
    r2.join(''),
    r3.join(''),
 ];
};





const useRawGrid = ({ tileset, width, height }) => {
  const [rawGrid, setRawGrid] = React.useState([[]]);
  const [tileIds, setTileIds] = React.useState([]);
  
  const createTileIds = () => {
    const newTileIds = tileset.patterns.map(rotate4).flat().filter(unique);
    setTileIds(newTileIds);
  };

  const createRawGrid = () => {
    const newRawGrid = [
      ...Array(height + 1).fill([
        ...Array(width + 1).fill('*'),
      ]),
    ];
    setRawGrid(newRawGrid);
  };

  const collapse = (x, y) => {
    const value = getCell(rawGrid, x, y);
    const possibilities = tileIds.filter(tileMatcher(value));
    if (!possibilities.length) return;
    const randomTile = randomFrom(possibilities);
    const newRawGrid = updateCell(rawGrid, x, y, randomTile);
    setRawGrid(newRawGrid);
  };

  const collapseSingle = (x, y) => {
    const currentValue = rawGrid[y][x];

    const neighbours = [
      tileset.wfc[rawGrid[y-1]?.[x] || '*'].canTouch,
      tileset.wfc[rawGrid[y]?.[x+1] || '*'].canTouch,
      tileset.wfc[rawGrid[y+1]?.[x] || '*'].canTouch,
      tileset.wfc[rawGrid[y]?.[x-1] || '*'].canTouch,
    ];

    const n = neighbours.reduce((acc, neighbour) => ({
      ...acc,
      ...neighbour.split('').reduce((acc2, option) => ({
        ...acc2,
        [option]: (acc[option] || 0) + 1,
      }), {})
    }), {});

    const options = Object.entries(n)
      .filter(([k, v]) => v === 4).map(([k, v]) => k)
      .filter(k => k !== currentValue);

    const newRawGrid = [...rawGrid.map(row => [...row])];  
    newRawGrid[y][x] = randomFrom(options);
    setRawGrid(newRawGrid);
  };

  React.useEffect(createTileIds, [tileset]);
  React.useEffect(createRawGrid, [width, height]);

  return {
    rawGrid,
    tileIds,
    collapseSingle,
    collapse,
    reset: createRawGrid,
  };
};

export default useRawGrid;
