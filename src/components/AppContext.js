import useTileset from '../hooks/useTileset';
import useResize from '../hooks/useResize';

const AppContext = React.createContext({});

export const AppProvider = ({
  defaultRoute,
  defaultTilesetName,
  defaultSize,
  children,
}) => {
  const [route, setRoute] = React.useState(defaultRoute);
  const { tileset, tilesetNames, setTilesetByName } = useTileset(defaultTilesetName);
  const [size, setSize] = React.useState(defaultSize);
  const { width, height } = useResize(size);

  console.log({size, width, height});

  // const {
  //   grid,
  //   getCellByXY,
  //   getCellNeighboursByXY,
  //   getTileValue,
  //   updateCellByXY,
  // } = useWFCGrid({
  //   w: width + 1,
  //   h: height + 1,
  // });

  // const { collapseSingle, collapse4 } = useWFCCollapser({
  //   tileset,
  //   getCellByXY,
  //   getCellNeighboursByXY,
  //   updateCellByXY,
  // });

  return (
    <AppContext.Provider
      value={{
        route,
        setRoute,

        tileset,
        tilesetNames,
        setTilesetByName,

        size,
        setSize,

        width,
        height,

        // grid,
        // getCellByXY,
        // getCellNeighboursByXY,
        // getTileValue,
        // updateCellByXY,

        // collapseSingle,
        // collapse4,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
