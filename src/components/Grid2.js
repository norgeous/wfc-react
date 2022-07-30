import { GridContainer, GridContainer2, Row, Point } from './styled';
import Cell from './Cell';

const Grid = ({ grid, width, height, size }) => {

  // console.log(grid, grid.filter(({ x, y }) => x < width && y < height));
  return (
    <GridContainer size={size} width={width} height={height}>
        {grid
          .filter(({ x, y }) => x < width && y < height)
          .map(({ x, y, v }) => {
            const tabIndexOffset = 1;
            const tabIndex = tabIndexOffset + x + ((y+1) * (width+1)) + (y*width);
            return (
              <button
                key={`${x}:${y}`}
                tabIndex={tabIndex}
                style={{textAlign: 'center', background: 'transparent', border: 'none'}}
              >
                {tabIndex}
              </button>
            );
          })}

        <GridContainer2 size={size} width={width} height={height}>
          {grid.map(({ x, y, v }) => {
            const tabIndexOffset = 1;
            const tabIndex = tabIndexOffset + x + (width+1)*y + (y*width);
            return (
              <div key={`${x}:${y}`}>
                <Point
                  title={`${x}:${y}`}
                  tabIndex={tabIndex}
                  >
                  {tabIndex}
                </Point>
              </div>
            );
          })}
        </GridContainer2>
      
    </GridContainer>
  );
};

export default Grid;
