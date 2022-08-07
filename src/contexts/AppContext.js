import useTileset from '../hooks/useTileset';
import useResize from '../hooks/useResize';
import useWFCGrid from '../hooks/useWFCGrid';
import useWFCCollapser from '../hooks/useWFCCollapser';
import { randomFrom } from '../utils';

const AppContext = React.createContext({});

export const AppProvider = ({
  routes,
  defaultRoute,
  defaultTilesetName,
  defaultSize,
  children,
}) => {
  const [route, setRoute] = React.useState(defaultRoute);

  const {
    tilesetNames,
    setSelectedTilesetName,
    tileset,
    tiles,
    points,
    updatePatternConfig,
  } = useTileset(defaultTilesetName);

  const [size, setSize] = React.useState(defaultSize);
  const { width, height } = useResize(size);

  const {
    grid,
    tileGrid,
    getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
    reset,
    randomize,
  } = useWFCGrid({
    w: width + 1,
    h: height + 1,
    tiles,
    points,
  });

  const {
    collapseSingle,
    collapse4,
  } = useWFCCollapser({
    tiles,
    getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
  });

  const [continual, setContinual] = React.useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const collapseLowestEntropy = () => {
    const unsolvedTiles = tileGrid.filter(({ solveLevel, valid }) => solveLevel < 4 || !valid);
    const lowestEntropy = unsolvedTiles.reduce((acc, { solveLevel }) => solveLevel > acc ? solveLevel : acc, 0);
    const lowestEntropyTiles = unsolvedTiles.filter(({ solveLevel }) => solveLevel === lowestEntropy);
    const nextTile = randomFrom(lowestEntropyTiles);
    if (nextTile) collapse4(nextTile.x, nextTile.y);
    else setContinual(false);
  };

  React.useEffect(() => {
    if (continual) {
      const t = setInterval(collapseLowestEntropy, 100);
      return () => clearInterval(t);
    }
  }, [tileGrid, continual]);

  const [debug, setDebug] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        route,
        routes,
        setRoute,

        tilesetNames,
        setSelectedTilesetName,
        tileset,
        tiles,
        points,
        updatePatternConfig,

        size,
        setSize,

        width,
        height,

        grid,
        tileGrid,
        getCellByXY,
        getCellNeighboursByXY,
        getTileValue,
        updateCellByXY,
        reset,
        randomize,

        collapseSingle,
        collapse4,
        collapseLowestEntropy,

        continual,
        toggleContinual,

        debug,
        setDebug,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
