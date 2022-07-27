const getCell = (rawGrid, x, y) => {
  const points = [
    rawGrid[y][x],
    rawGrid[y][x+1],
    rawGrid[y+1][x+1],
    rawGrid[y+1][x],
  ];

  return points.join('');
}

const useGrid = ({ rawGrid }) => {
  const [grid, setGrid] = React.useState([[]]);

  React.useEffect(() => {
    const newGrid = [];

    for (let y = 0; y < rawGrid.length - 1; y++) {
      const row = rawGrid[y];
      const newRow = [];
      for (let x = 0; x < row.length - 1; x++) {
        newRow.push(getCell(rawGrid, x, y));
      }
      newGrid.push(newRow);
    }

    setGrid(newGrid);
  }, [rawGrid]);

  return {
    grid,
  };
};

export default useGrid;
