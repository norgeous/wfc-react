import { TileGrid, Tile, PointGrid, Point } from './styled';
import { useAppContext } from './AppContext';

const Grid = () => {
  const {
    grid,
    width,
    height,
    size,
    getTileValue,
    tileset,
    collapseSingle,
    collapse4,
  } = useAppContext();

  console.log(tileset)

  const { TileFace, tiles } = tileset;

  return (
    <TileGrid size={size} width={width} height={height}>
      {grid
        .filter(({ x, y }) => x < width && y < height)
        .map(({ x, y, v }) => {
          const tabIndexOffset = 1;
          const tabIndex = tabIndexOffset + x + ((y+1) * (width+1)) + (y*width);
          const tileValue = getTileValue(x, y);
          const solveLevel = 4 - [...tileValue].filter(d => d === '*').length;
          const valid = tileValue.includes('*') || tiles.map(({ pattern }) => pattern).includes(tileValue);
          return (
            <Tile
              key={`${x}:${y}`}
              tabIndex={tabIndex}
              onClick={() => collapse4(x, y)}
            >
              <TileFace
                tilesetName={tileset.name}
                tileId={tileValue}
                solveLevel={solveLevel}
                valid={valid}
                size={size}
              />
            </Tile>
          );
        })}

        <PointGrid size={size} width={width} height={height}>
          {grid.map(({ x, y, v }) => {
            const tabIndexOffset = 1;
            const tabIndex = tabIndexOffset + x + (width+1)*y + (y*width);
            return (
              <div key={`${x}:${y}`}>
                <Point
                  title={`${x}:${y}`}
                  tabIndex={tabIndex}
                  onClick={() => collapseSingle(x, y)}
                >
                  {v}
                </Point>
              </div>
            );
          })}
        </PointGrid>
    </TileGrid>
  );
};

export default Grid;
