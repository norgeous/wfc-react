// import GridData from '../classes/GridData';
// const gridInstance1 = new GridData({
//   unCollapsed: '*',
//   outOfBounds: '*',
// });
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
  const newRawGrid = [...rawGrid.map(row => [...row])]
  newRawGrid[y][x] = tile[0];
  newRawGrid[y][x+1] = tile[1];
  newRawGrid[y+1][x+1] = tile[2];
  newRawGrid[y+1][x] = tile[3];

  return newRawGrid;
}


















const useRawGrid = ({ tileset, width, height }) => {
  const [rawGrid, setRawGrid] = React.useState([[]]);

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
    const possibilities = tileset.tileIds.filter(tileMatcher(value));
    if (!possibilities.length) return;
    const randomTile = randomFrom(possibilities);
    const newRawGrid = updateCell(rawGrid, x, y, randomTile);
    setRawGrid(newRawGrid);
  };

  const collapseRandomHighEntropyCell = () => {
    
  };

  React.useEffect(createRawGrid, [width, height]);

  return {
    rawGrid,
    collapse,
    collapseRandomHighEntropyCell,
    reset: createRawGrid,
  };
};

export default useRawGrid;
