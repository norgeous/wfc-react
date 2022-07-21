import Grid from '../class/Grid.js';

const gridInstance = new Grid({
  unCollapsed: '****',
  outOfBounds: '****',
});

const useGrid = ({ width, height }) => {
  const [grid, setGrid] = React.useState(gridInstance.grid);

  React.useEffect(() => {
    gridInstance.newGrid(width, height);
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

  return {
    grid,
    collapse,
    collapseRandomHighEntropyCell,
  };
};

export default useGrid;
