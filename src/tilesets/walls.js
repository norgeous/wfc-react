import { TileBase } from '../components/styled';

export default {
  name: 'walls',
  uncollapsed: '*',
  TileFace: TileBase,
  points: [ '0', '1' ],
  tiles: [
    {
      pattern: '0000',
      rotate: true,
      weight: 3,
    },
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
      pattern: '1010',
      rotate: true,
      weight: 3,
    },
    {
      pattern: '1110',
      rotate: true,
      weight: 3,
    },
    {
      pattern: '1111',
      rotate: true,
      weight: 3,
    },
  ],
};
