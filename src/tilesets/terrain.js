import { TerrainTile } from '../components/styled';

export default {
  name: 'terrain',
  uncollapsed: '*',
  TileFace: TerrainTile,
  patterns: [
    'wwww', 'cwww', 'ccww', 'cccw',
    'cccc', 'gccc', 'ggcc', 'gggc',
    'gggg',
    'cwcg',
  ],
  wfc: {
    // uncollapsed
    '*': {
      color: '#ff02',
      canTouch: 'swcgfm',
    },

    // sea
    s: {
      weight: 3,
      color: 'blue',
      canTouch: 'sw',
    },

    // water
    w: {
      weight: 3,
      color: 'blue',
      canTouch: 'wsc',
    },

    // coast
    c: {
      weight: 3,
      color: 'darkyellow',
      canTouch: 'cwg',
    },

    // grass
    g: {
      weight: 3,
      color: 'green',
      canTouch: 'gcfm',
    },

    // forest
    f: {
      weight: 3,
      color: 'darkgreen',
      canTouch: 'fg',
    },

    // mountain
    m: {
      weight: 3,
      color: 'snow',
      canTouch: 'mg',
    },
  }
};
