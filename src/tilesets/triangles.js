import { TileBase } from '../components/styled';

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
