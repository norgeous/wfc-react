import { TerrainTile } from '../components/styled';

export default {
  name: 'terrain',
  uncollapsed: '*',
  TileFace: TerrainTile,
  tileConfig: [
    {
      pattern: 'ssss',
      weight: 1,
    },
    {
      pattern: 'wsss',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'wwss',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'wsws',
      weight: 1,
      rotate: true,
      enabled: false,
    },
    {
      pattern: 'swww',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'wwww',
      weight: 1,
    },
    {
      pattern: 'cwww',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'ccww',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'wccc',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'cccc',
      weight: 1,
    },
    {
      pattern: 'gccc',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'ggcc',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'cggg',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'gggg',
      weight: 1,
    },
    {
      pattern: 'fggg',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'ffgg',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'gfff',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'ffff',
      weight: 1,
    },
    {
      pattern: 'mggg',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'mmgg',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'gmmm',
      weight: 1,
      rotate: true,
    },
    {
      pattern: 'mmmm',
      weight: 1,
    },
  ],
};
