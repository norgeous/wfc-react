import GridData from '../classes/GridData';

const gridInstance = new GridData({
  unCollapsed: '****',
  outOfBounds: '****',
});

const useGrid = ({ tileset, width, height }) => {
  const [grid, setGrid] = React.useState(gridInstance.grid);

  React.useEffect(() => {
    gridInstance.newGrid(tileset, width, height);
    setGrid(gridInstance.grid);
  }, [width, height]);

  const collapse = (x, y) => {
    gridInstance.collapseCell(x, y);
    setGrid(gridInstance.grid);
  };

  const collapseRandomHighEntropyCell = () => {
    gridInstance.collapseRandomHighEntropyCell();
    setGrid(gridInstance.grid);
  };

  const reset = () => {
    gridInstance.newGrid(tileset, width, height);
    setGrid(gridInstance.grid);
  };

  return {
    grid,
    collapse,
    collapseRandomHighEntropyCell,
    reset,
  };
};

export default useGrid;
