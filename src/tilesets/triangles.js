import { TileBase } from '../components/styled';

export default {
  name: 'triangles',
  uncollapsed: '*',
  Tile: TileBase,
  patterns: ['1000', '1100', '1110'],
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
      weight: 300,
      color: '#f0f2',
      canTouch: '01',
    },
  },
};
