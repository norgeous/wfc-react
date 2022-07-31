import { TileBase } from '../components/styled';

export default {
  name: 'walls',
  uncollapsed: '*',
  TileFace: TileBase,
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
  // patterns: ['1000', '1100', '1010', '1110', '1111'],
  // wfc: {
  //   '*': {
  //     color: '#ff02',
  //     canTouch: '01',
  //   },
  //   0: {
  //     weight: 3,
  //     color: '#222',
  //     canTouch: '01',
  //   },
  //   1: {
  //     weight: 3,
  //     color: '#f0f2',
  //     canTouch: '01',
  //   },
  // },
};
