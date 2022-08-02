import useTileset from '../hooks/useTileset';
import useResize from '../hooks/useResize';
import useWFCGrid from '../hooks/useWFCGrid';
import useWFCCollapser from '../hooks/useWFCCollapser';

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
    getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
    reset,
    randomize,
  } = useWFCGrid({
    w: width + 1,
    h: height + 1,
  });

  const {
    collapseSingle,
    collapse4,
  } = useWFCCollapser({
    tileset,
    getCellByXY,
    getCellNeighboursByXY,
    updateCellByXY,
  });

  const [continual, setContinual] = React.useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const [debug, setDebug] = React.useState(true);

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
        getCellByXY,
        getCellNeighboursByXY,
        getTileValue,
        updateCellByXY,
        reset,
        randomize,

        collapseSingle,
        collapse4,

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
