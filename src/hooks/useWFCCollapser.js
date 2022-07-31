import { weightedRandomFrom } from '../utils';

const getConstraintsForValue = (tileset, v) => tileset.wfc[v].canTouch.split('');

const useWFCCollapser = ({ tileset, getCellByXY, getCellNeighboursByXY, updateCellByXY }) => {

  const collapseSingle = (x, y) => {
    const { v } = getCellByXY(x, y);
    const neighbours = getCellNeighboursByXY(x, y);
    const constraints = Object.entries(tileset.wfc).map(([key, tileInfo]) => ({
      key,
      weight: tileInfo.weight,
      count:[
        getConstraintsForValue(tileset, neighbours[0].v).includes(key),
        getConstraintsForValue(tileset, neighbours[1].v).includes(key),
        getConstraintsForValue(tileset, neighbours[2].v).includes(key),
        getConstraintsForValue(tileset, neighbours[3].v).includes(key),
      ].reduce((acc, found) => found ? acc + 1 : acc, 0),
    }));
    const options = constraints
      .filter(constraint => constraint.count === 4)
      .filter(({ key }) => key !== v);
    const newValue = weightedRandomFrom(
      options.map(({ key }) => key),
      options.map(({ weight }) => weight),
    );
    updateCellByXY({ x, y, v: newValue });
  };

  const collapse4 = (x, y) => {
    collapseSingle(x, y);
    collapseSingle(x + 1, y);
    collapseSingle(x + 1, y + 1);
    collapseSingle(x, y + 1);
  };

  const randomizeAll = () => {
    setGrid(oldGrid => [
      ...oldGrid.map(cell => {
        const newValue = weightedRandomFrom(
          tileset.map(({ key }) => key),
          options.map(({ weight }) => weight),
        );
        return {
          ...cell,
          v: newValue,
        };
      }),
    ]);

  };

  return {
    collapseSingle,
    collapse4,
    randomizeAll,
  };
};

export default useWFCCollapser;
