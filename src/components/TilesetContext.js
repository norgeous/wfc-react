import { rotate4, unique } from '../utils';

export const TilesetContext = React.createContext({});

export const TilesetProvider = ({ defaultTileset, children }) => {
  const [tileset, setTileset] = React.useState(defaultTileset);

  const unpackAndSetTileset = (newTileset) => {
    const { tiles } = newTileset;

    const tilesExpanded =  tiles.reduce((acc, { pattern, rotate, weight }) => {
      const rotated = rotate ? rotate4(pattern).filter(unique) : [ pattern ];
      return [
        ...acc,
        ...rotated.map(p => ({
          pattern: p,
          weight,
        })),
      ];
    }, []);

    console.log({tilesExpanded});

    setTileset({
      ...newTileset,
      tiles: tilesExpanded,
    });
  };

  return (
    <TilesetContext.Provider
      value={[
        tileset,
        unpackAndSetTileset,
      ]}
    >
      {children}
    </TilesetContext.Provider>
  );
};

export const useTileset = () => React.useContext(TilesetContext);
