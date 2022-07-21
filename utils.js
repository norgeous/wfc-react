import tiles from './ascii-tileset.js';

const outOfBounds = '0000';

// arrays are objects too!
export const randomFrom = (obj = {}) => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

export const randomLabel = () => randomFrom(Object.keys(tiles));

export const labelToChar = (label) => randomFrom(tiles[label]);

// export const getNeighbourCoords = (x, y) => {
//   return [
//     [x, y - 1],
//     [x + 1, y],
//     [x, y + 1],
//     [x - 1, y],
//   ];
// };

// export const getNeighbours = (grid, x, y) => [
//   grid[y - 1]?.[x] || outOfBounds, // above
//   grid[y]?.[x + 1] || outOfBounds, // right
//   grid[y + 1]?.[x] || outOfBounds, // below
//   grid[y]?.[x - 1] || outOfBounds, // left
// ];

// const getCellConstraint = (grid, index, direction) => {
//   const cell = grid[index];
//   if (!cell) return cell;
//   return cell.split('')[direction];
// };
// export const getConstraints = (grid, width, index) => {
//   return [
//     getCellConstraint(grid, Number(index) - width, 2), // above
//     getCellConstraint(grid, Number(index) + 1, 3), // right
//     getCellConstraint(grid, Number(index) + width, 0), // below
//     getCellConstraint(grid, Number(index) - 1, 1), // left
//   ];
// };

// const checkSide = (constraint, bit) => {
//   // console.log(constraint,bit);
//   if (constraint === null) return true;
//   // if (constraint === undefined) return bit === '0';
//   if (constraint === undefined) return true;
//   if (constraint === bit) return true;
//   return false;
// };
// export const getPoss = (constraints) => {
//   // console.log(constraints);
//   return Object.keys(tiles).filter(tileId => {
//     const bits = tileId.split('');
//     const checks = [
//       checkSide(constraints[0], bits[0]),
//       checkSide(constraints[1], bits[1]),
//       checkSide(constraints[2], bits[2]),
//       checkSide(constraints[3], bits[3]),
//     ];
//     return checks.every(check => check === true);
//   });
// };








