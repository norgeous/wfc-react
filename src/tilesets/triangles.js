import { TileBase } from '../components/styled';

export default {
  name: 'triangles',
  uncollapsed: '*',
  TileFace: TileBase,
  constraints: {
    points: [ '0', '1' ],
    tiles: [
      {
        pattern: '1000',
        rotate: true,
        weight: 3,
      },
      {
        pattern: '1100',
        rotate: true,
        weight: 3,
      },
      {
        pattern: '1110',
        rotate: true,
        weight: 3,
      },
    ],
  },
  // patterns: ['1000', '1100', '1110'],
  // wfc: {
  //   '*': {
  //     color: '#ff02',
  //     canTouch: '01',
  //   },
  //   0: {
  //     weight: 1,
  //     color: '#222',
  //     canTouch: '01',
  //   },
  //   1: {
  //     weight: 1,
  //     color: '#f0f2',
  //     canTouch: '01',
  //   },
  // },
};
