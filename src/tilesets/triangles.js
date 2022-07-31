import { TileBase } from '../components/styled';

export default {
  name: 'triangles',
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
};
