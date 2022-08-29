import React from 'react';
import styled, { css } from 'styled-components';
import { TileBase } from '../styled-components/styled';

// http://cr31.co.uk/stagecast/wang/2corn.html

// http://cr31.co.uk/stagecast/art/atlas/corn/seasand.png
// http://cr31.co.uk/stagecast/art/atlas/corn/sandgrass.png
// http://cr31.co.uk/stagecast/art/atlas/corn/terrain.png

const p = [
  ['0% 0%',  '33.33% 0%',  '66.66% 0%',  '100% 0%'],
  ['0% 33.33%', '33.33% 33.33%', '66.66% 33.33%', '100% 33.33%'],
  ['0% 66.66%', '33.33% 66.66%', '66.66% 66.66%', '100% 66.66%'],
  ['0% 100%', '33.33% 100%', '66.66% 100%', '100% 100%'],
];

const t = {
  'wwwc': ['seasand', p[0][0]],
  'wccw': ['seasand', p[0][1]],
  'cwcc': ['seasand', p[0][2]],
  'wwcc': ['seasand', p[0][3]],

  'cwcw': ['seasand', p[1][0]],
  'wccc': ['seasand', p[1][1]],
  'cccc': ['seasand', p[1][2]],
  'ccwc': ['seasand', p[1][3]],

  'wcww': ['seasand', p[2][0]],
  'ccww': ['seasand', p[2][1]],
  'cccw': ['seasand', p[2][2]],
  'cwwc': ['seasand', p[2][3]],

  'wwww': ['seasand', p[3][0]],
  'wwcw': ['seasand', p[3][1]],
  'wcwc': ['seasand', p[3][2]],
  'cwww': ['seasand', p[3][3]],

  
  'cccg': ['sandgrass', p[0][0]],
  'cggc': ['sandgrass', p[0][1]],
  'gcgg': ['sandgrass', p[0][2]],
  'ccgg': ['sandgrass', p[0][3]],

  'gcgc': ['sandgrass', p[1][0]],
  'cggg': ['sandgrass', p[1][1]],
  'gggg': ['sandgrass', p[1][2]],
  'ggcg': ['sandgrass', p[1][3]],

  'cgcc': ['sandgrass', p[2][0]],
  'ggcc': ['sandgrass', p[2][1]],
  'gggc': ['sandgrass', p[2][2]],
  'gccg': ['sandgrass', p[2][3]],

  // 'cccc': ['sandgrass', p[3][0]],
  'ccgc': ['sandgrass', p[3][1]],
  'cgcg': ['sandgrass', p[3][2]],
  'gccc': ['sandgrass', p[3][3]],

  
  'mmmg': ['terrain', p[0][0]],
  'mggm': ['terrain', p[0][1]],
  'gmgg': ['terrain', p[0][2]],
  'mmgg': ['terrain', p[0][3]],

  'gmgm': ['terrain', p[1][0]],
  'mggg': ['terrain', p[1][1]],
  // 'gggg': ['terrain', p[1][2]],
  'ggmg': ['terrain', p[1][3]],

  'mgmm': ['terrain', p[2][0]],
  'ggmm': ['terrain', p[2][1]],
  'gggm': ['terrain', p[2][2]],
  'gmmg': ['terrain', p[2][3]],

  'mmmm': ['terrain', p[3][0]],
  'mmgm': ['terrain', p[3][1]],
  'mgmg': ['terrain', p[3][2]],
  'gmmm': ['terrain', p[3][3]],
};

const Inside = styled.div`  
  width: 100%;
  height: 100%;
  background-size: 400%;
  background-repeat: no-repeat;
  background-origin: padding-box;
  image-rendering: pixelated;
  ${({ tileId }) => t[tileId] && css`
    background-image: url(http://cr31.co.uk/stagecast/art/atlas/corn/${t[tileId][0]}.png);
    background-position: ${t[tileId][1]};
  `}
  ${({ tileId }) => t[tileId]?.[0] === 'seasand' && css`
    background-image: url(src/tilesets/seasand.svg);
  `}
`;

const TerrainPng = (props) => (
  <TileBase {...props}>
    <Inside tileId={props.tileId}/>
  </TileBase>
);

export default {
  name: 'terrain png',
  TileFace: TerrainPng,
  tileConfig: [
    { pattern: 'wwww' },
    { pattern: 'cwww', rotate: true },
    { pattern: 'ccww', rotate: true },
    { pattern: 'cwcw', rotate: true, enabled: false  },
    { pattern: 'wccc', rotate: true },
    { pattern: 'cccc' },
    { pattern: 'gccc', rotate: true },
    { pattern: 'ggcc', rotate: true },
    { pattern: 'gcgc', rotate: true, enabled: false  },
    { pattern: 'cggg', rotate: true },
    { pattern: 'gggg' },
    { pattern: 'mggg', rotate: true },
    { pattern: 'mmgg', rotate: true },
    { pattern: 'mgmg', rotate: true, enabled: false  },
    { pattern: 'gmmm', rotate: true },
    { pattern: 'mmmm' },
  ],
};
