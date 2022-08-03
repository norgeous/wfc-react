import { TileGrid, Tile, PointGrid, Point } from './styled';

const GridDisplay = ({
  grid,
  width,
  height,
  size,
  getTileValue,
  tileset,
  tiles,
  collapseSingle,
  collapse4,
  debug,
  style,
}) => {
  const { TileFace } = tileset;

  return (
    <TileGrid size={size} width={width} height={height} style={style}>
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
              valid={valid}
              onClick={() => collapse4(x, y)}
            >
              <TileFace
                tileId={tileValue}
                solveLevel={solveLevel}
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
                  debug={debug}
                  onClick={() => collapseSingle(x, y)}
                >
                  {v === '*' ? '✸' : v}
                </Point>
              </div>
            );
          })}
        </PointGrid>
    </TileGrid>
  );
};

export default GridDisplay;
