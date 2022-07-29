import { weightedRandomFrom } from '../utils';

const getConstraintsForValue = (tileset, v) => tileset.wfc[v].canTouch.split('');

const useWFCCollapser = ({ tileset, getCellNeighboursByXY, updateCellByXY }) => {
  const collapseSingle = (x, y) => {
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
    const options = constraints.filter(constraint => constraint.count === 4);
    const newValue = weightedRandomFrom(
      options.map(({ key }) => key),
      options.map(({ weight }) => weight),
    );
    updateCellByXY({ x, y, v: newValue });
  };

  return {
    collapseSingle,
    // collapse4,
  };
};

export default useWFCCollapser;
