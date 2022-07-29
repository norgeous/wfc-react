import { GridContainer, GridContainer2, Row, Point } from './styled';
import Cell from './Cell';

const Grid = ({ grid, width, height, size }) => {

  console.log(grid, grid.filter(({ x, y }) => x < width && y < height));
  return (
    <GridContainer size={size} width={width} height={height}>
      {/* <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${height}, ${size}px)`,
          gridTemplateColumns: `repeat(${width}, ${size}px)`,
          position: 'relative',
        }}
      > */}
        {grid
          .filter(({ x, y }) => x < width && y < height)
          .map(({ x, y, v }) => {
            const tabIndexOffset = 1;
            // const tabIndex = tabIndexOffset + x + (y * width) + (width) + 1;
            const tabIndex = tabIndexOffset + x + ((y+1) * (width+1)) + (y*width);
            return (
              <div
                key={`${x}:${y}`}
                tabIndex={tabIndex}
                style={{textAlign: 'center'}}
              >
                {tabIndex}
              </div>
            );
          })}

        <GridContainer2 size={size} width={width} height={height}>
          {grid.map(({ x, y, v }) => {
            const tabIndexOffset = 1;
            // const tabIndex = tabIndexOffset + x + (y * width) + (y * (width - 1));
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
      
      {/* </div> */}
    </GridContainer>
  );
};

export default Grid;
