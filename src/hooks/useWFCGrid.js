const byXY = (x, y) => (cell) => cell.x === x && cell.y === y;

const useWFCGrid = ({ w, h }) => {
  const [grid, setGrid] = React.useState([]);

  const updateGridSize = () => {
    setGrid(oldGrid => {
      const trimmedOldGrid = oldGrid.filter(({ x, y }) => x <= w && y <= h);

      const newGrid = [];
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const oldCell = trimmedOldGrid.find(byXY(x, y));
          const newCell = oldCell ? oldCell : { x, y, v: '*' };
          newGrid.push(newCell);
        }
      }

      return newGrid;
    });
  };

  React.useEffect(updateGridSize, [w, h]);

  const getCellByXY = (x, y) => grid.find(byXY(x, y)) || { v: '*' };

  const getCellNeighboursByXY = (x, y) => [
    getCellByXY(x, y - 1),
    getCellByXY(x + 1, y),
    getCellByXY(x, y + 1),
    getCellByXY(x - 1, y),
  ];
  
  const getTileValue = (x, y) => [
    getCellByXY(x, y),
    getCellByXY(x + 1, y),
    getCellByXY(x + 1, y + 1),
    getCellByXY(x, y + 1),
  ].map(({ v }) => v).join('');

  const updateCellByXY = ({ x, y, v }) => {
    setGrid(oldGrid => [
      ...oldGrid.filter(cell => !byXY(x, y)(cell)),
      { x, y, v },
    ].sort((a, b) => a.x - b.x).sort((a, b) => a.y - b.y));
  };

  // console.log(grid);

  return {
    grid,
    getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
  };
};

export default useWFCGrid;
