import React from 'react';
import { TerrainTile } from '../styled-components/styled';

export default {
  name: 'terrain',
  TileFace: (props) => <TerrainTile tilesetName="terrain" {...props} />,
  tileConfig: [
    { pattern: 'ssss' },
    { pattern: 'wsss', rotate: true },
    { pattern: 'wwss', rotate: true },
    { pattern: 'wsws', rotate: true, enabled: false },
    { pattern: 'swww', rotate: true },
    { pattern: 'wwww' },
    { pattern: 'cwww', rotate: true },
    { pattern: 'ccww', rotate: true },
    { pattern: 'wccc', rotate: true },
    { pattern: 'cccc' },
    { pattern: 'gccc', rotate: true },
    { pattern: 'ggcc', rotate: true },
    { pattern: 'cggg', rotate: true },
    { pattern: 'gggg' },
    { pattern: 'fggg', rotate: true },
    { pattern: 'ffgg', rotate: true },
    { pattern: 'gfff', rotate: true },
    { pattern: 'ffff' },
    { pattern: 'mggg', rotate: true },
    { pattern: 'mmgg', rotate: true },
    { pattern: 'gmmm', rotate: true },
    { pattern: 'mmmm' },
  ],
};
