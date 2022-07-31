import { TileBase } from '../components/styled';

export default {
  name: 'triangles',
  uncollapsed: '*',
  TileFace: TileBase,
  points: [ '0', '1' ],
  tiles: [
    {
      pattern: '0000',
      enabled: false,
      rotate: false,
      weight: 1,
    },
    {
      pattern: '1000',
      enabled: false,
      rotate: true,
      weight: 1,
    },
    {
      pattern: '1100',
      rotate: true,
      weight: 1,
    },
    {
      pattern: '1010',
      rotate: true,
      weight: 1,
      enabled: false,
    },
    {
      pattern: '1110',
      rotate: true,
      weight: 1,
    },
    {
      pattern: '1111',
      rotate: false,
      weight: 1,
      enabled: false,
    },
  ],
};
