// import styled from 'styled-components';
import { TileBase } from '../components/styled';

// const config = [
//   { '*': '25% 25%', 0: '50% 50%', 1: '0% 0%' },
//   { '*': '25% 25%', 0: '50% 50%', 1: '0% 0%' },
//   { '*': '75% 25%', 0: '50% 50%', 1: '100% 0%' },
//   { '*': '75% 25%', 0: '50% 50%', 1: '100% 0%' },
//   { '*': '75% 75%', 0: '50% 50%', 1: '100% 100%' },
//   { '*': '75% 75%', 0: '50% 50%', 1: '100% 100%' },
//   { '*': '25% 75%', 0: '50% 50%', 1: '0% 100%' },
//   { '*': '25% 75%', 0: '50% 50%', 1: '0% 100%' },
// ];

// const getShape = (constraint) => {
//   const points = [
//     config[0][constraint[0]],
//     config[1][constraint[0]],
//     config[2][constraint[1]],
//     config[3][constraint[1]],
//     config[4][constraint[2]],
//     config[5][constraint[2]],
//     config[6][constraint[3]],
//     config[7][constraint[3]],
//   ];

//   return `polygon(${points.join()})`;
// };

// const Tile = styled(TileBase)`
//   width: ${({ size }) => size}px;
//   height: ${({ size }) => size}px;
//   transition: all 400ms ease-in;
//   clip-path: ${({ tileId }) => getShape(tileId)};
//   background: ${({ solveLevel }) => ({
//     0: '#ff02',
//     1: '#0ff3',
//     2: '#0ff4',
//     3: '#0ff5',
//     4: '#f0f2',
//   })[solveLevel]};
// `;

export default {
  name: 'triangles',
  uncollapsed: '*',
  Tile: TileBase,
  wfc: {
    '*': {
      color: '#ff02',
      canTouch: '01',
    },
    0: {
      weight: 3,
      color: '#222',
      canTouch: '01',
    },
    1: {
      weight: 3,
      color: '#f0f2',
      canTouch: '01',
      patterns: ['1000', '1100', '1110'],
    },
  },
};
