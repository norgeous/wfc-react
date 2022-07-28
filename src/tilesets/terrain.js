// const tileIds = [
//   'wwww',
 
//   'cwww',
//   'wcww',
//   'wwcw',
//   'wwwc',
//   'wwcc',
//   'cwwc',
//   'ccww',
//   'wccw',
//   'wccc',
//   'cwcc',
//   'ccwc',
//   'cccw',

//   'cccc',
  
//   'gccc',
//   'cgcc',
//   'ccgc',
//   'cccg',
//   'ccgg',
//   'gccg',
//   'ggcc',
//   'cggc',
//   'cggg',
//   'gcgg',
//   'ggcg',
//   'gggc',

//   'cwcg',
//   'cgcw',
//   'gcwc',
//   'wcgc',

//   'gggg',
// ];




// const getStyle = (constraint) => {
//   const c = {
//     'wwww': `background: darkblue;`,

//     'cwww': `background: blue; ::before{${topLeft('lightyellow')}};`,
//     'wcww': `background: blue; ::before{${topRight('lightyellow')}};`,
//     'wwcw': `background: blue; ::before{${bottomRight('lightyellow')}};`,
//     'wwwc': `background: blue; ::before{${bottomLeft('lightyellow')}};`,
//     'wwcc': `background: blue; ::before{${bottomHalf('lightyellow')}};`,
//     'cwwc': `background: blue; ::before{${leftHalf('lightyellow')}};`,
//     'ccww': `background: blue; ::before{${topHalf('lightyellow')}};`,
//     'wccw': `background: blue; ::before{${rightHalf('lightyellow')}};`,
//     'wccc': `background: lightyellow; ::before{${topLeft('blue')}};`,
//     'cwcc': `background: lightyellow; ::before{${topRight('blue')}};`,
//     'ccwc': `background: lightyellow; ::before{${bottomRight('blue')}};`,
//     'cccw': `background: lightyellow; ::before{${bottomLeft('blue')}};`,

//     'cccc': `background: yellow;`,

//     'gccc': `background: lightyellow; ::before{${topLeft('green')}};`,
//     'cgcc': `background: lightyellow; ::before{${topRight('green')}};`,
//     'ccgc': `background: lightyellow; ::before{${bottomRight('green')}};`,
//     'cccg': `background: lightyellow; ::before{${bottomLeft('green')}};`,
//     'ccgg': `background: lightyellow; ::before{${bottomHalf('green')}};`,
//     'gccg': `background: lightyellow; ::before{${leftHalf('green')}};`,
//     'ggcc': `background: lightyellow; ::before{${topHalf('green')}};`,
//     'cggc': `background: lightyellow; ::before{${rightHalf('green')}};`,
//     'cggg': `background: green; ::before{${topLeft('lightyellow')}};`,
//     'gcgg': `background: green; ::before{${topRight('lightyellow')}};`,
//     'ggcg': `background: green; ::before{${bottomRight('lightyellow')}};`,
//     'gggc': `background: green; ::before{${bottomLeft('lightyellow')}};`,

//     'cwcg': `background: lightyellow; ::before{${topRight('blue')}}; ::after{${bottomLeft('green')}};`,
//     'cgcw': `background: lightyellow; ::before{${topRight('green')}}; ::after{${bottomLeft('blue')}};`,

//     'gcwc': `background: lightyellow; ::before{${topLeft('green')}}; ::after{${bottomRight('blue')}};`,
//     'wcgc': `background: lightyellow; ::before{${topLeft('blue')}}; ::after{${bottomRight('green')}};`,

//     'gggg': `background: darkgreen;`,
//   }[constraint];

//   return c;
// };

// const Tile = styled.div`
//   width: ${({ size }) => size}px;
//   height: ${({ size }) => size}px;
//   transition: all 400ms ease-in;
//   border: 0 solid none;
//   ::before,
//   ::after {
//     content: '';
//     display: block;
//     width: 0%;
//     height: 0%;
//     top: 50%;
//     right: 50%;
//     bottom: 50%;
//     left: 50%;
//     position: absolute;
//     transition: all 400ms ease-in;
//   }
//   background: ${({ solveLevel }) => ({
//     0: '#ff02',
//     1: '#0ff3',
//     2: '#0ff4',
//     3: '#0ff5',
//     4: '#f0f2',
//   })[solveLevel]};

//   clip-path: polygon(25% 25%, 50% 25%, 75% 25%, 75% 50%, 75% 75%, 50% 75%, 25% 75%, 25% 50%);
//   ${({solveLevel}) => solveLevel === 4 && `
//     clip-path: polygon(0% 0%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%);    
//   `}

//   ${({ tileId }) => getStyle(tileId)};

//   :hover {
//     opacity: 0.5;
//   }
// `;

import { TerrainTile } from '../components/styled';

export default {
  name: 'terrain',
  uncollapsed: '*',
  Tile: TerrainTile,
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
      patterns: [
        'wwww', 'cwww', 'ccww', 'cccw',
        'cccc', 'gccc', 'ggcc', 'gggc',
        'gggg',
        'cwcg',
      ],
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
