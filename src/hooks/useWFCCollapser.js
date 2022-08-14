import { weightedRandomFrom } from '../utils';

// const getConstraintsForValue = (tileset, v) => tileset.wfc[v].canTouch.split('');

const useWFCCollapser = ({
  tiles,
  getCellByXY,
  getCellNeighboursByXY,
  getTileValue,
  updateCellByXY,
}) => {

  const collapseSingle = (x, y) => {
    const { v } = getCellByXY(x, y);
    const neighbours = getCellNeighboursByXY(x, y);

    console.log({ v, neighbours, tiles});

    // const constraints = Object.entries(tileset.wfc).map(([key, tileInfo]) => ({
    //   key,
    //   weight: tileInfo.weight,
    //   count:[
    //     getConstraintsForValue(tileset, neighbours[0].v).includes(key),
    //     getConstraintsForValue(tileset, neighbours[1].v).includes(key),
    //     getConstraintsForValue(tileset, neighbours[2].v).includes(key),
    //     getConstraintsForValue(tileset, neighbours[3].v).includes(key),
    //   ].reduce((acc, found) => found ? acc + 1 : acc, 0),
    // }));
    // const options = constraints
    //   .filter(constraint => constraint.count === 4)
    //   .filter(({ key }) => key !== v);
    // const newValue = weightedRandomFrom(
    //   options.map(({ key }) => key),
    //   options.map(({ weight }) => weight),
    // );
    // updateCellByXY({ x, y, v: newValue });
  };

  const collapse4 = (x, y) => {
    const tileValue = getTileValue(x, y);
    const a = tileValue.split('');
    const options = tiles.filter(({ pattern }) => {
      const b = pattern.split('');
      return [
        a[0] === '*' || a[0] === b[0],
        a[1] === '*' || a[1] === b[1],
        a[2] === '*' || a[2] === b[2],
        a[3] === '*' || a[3] === b[3],
      ].every(c => c === true)
    });

    const newValue = weightedRandomFrom(
      options.map(({ pattern }) => pattern),
      options.map(({ weight }) => weight),
    );
    // console.log({tileValue, tiles, options, newValue});
    
    updateCellByXY({ x, y, v: newValue?.[0] || '*' });
    updateCellByXY({ x:x+1, y, v: newValue?.[1] || '*' });
    updateCellByXY({ x:x+1, y: y+1, v: newValue?.[2] || '*' });
    updateCellByXY({ x, y: y+1, v: newValue?.[3] || '*' });
  };

  // const randomizeAll = () => {
  //   setGrid(oldGrid => [
  //     ...oldGrid.map(cell => {
  //       const newValue = weightedRandomFrom(
  //         tileset.map(({ key }) => key),
  //         options.map(({ weight }) => weight),
  //       );
  //       return {
  //         ...cell,
  //         v: newValue,
  //       };
  //     }),
  //   ]);
  // };

  return {
    collapseSingle,
    collapse4,
    // randomizeAll,
  };
};

export default useWFCCollapser;
