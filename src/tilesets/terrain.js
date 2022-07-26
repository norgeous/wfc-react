const tileIds = [
  'wwww',
 
  'bwww',
  'wbww',
  'wwbw',
  'wwwb',
  'wwbb',
  'bwwb',
  'bbww',
  'wbbw',
  'wbbb',
  'bwbb',
  'bbwb',
  'bbbw',

  'bbbb',
  
  'gbbb',
  'bgbb',
  'bbgb',
  'bbbg',
  'bbgg',
  'gbbg',
  'ggbb',
  'bggb',
  'bggg',
  'gbgg',
  'ggbg',
  'gggb',

  'bwbg',
  'bgbw',
  'gbwb',
  'wbgb',

  // 'gggg',
];

const topLeft = (background) => `
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-bottom-right-radius: 50%;
`;
const topRight = (background) => `
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-bottom-left-radius: 50%;
`;
const bottomRight = (background) => `
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-top-left-radius: 50%;
`;
const bottomLeft = (background) => `
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-top-right-radius: 50%;
`;

const topHalf = (background) => `
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  background: ${background};
`;
const rightHalf = (background) => `
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  background: ${background};
`;
const bottomHalf = (background) => `
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  background: ${background};
`;
const leftHalf = (background) => `
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${background};
`;


const getStyle = (constraint) => {
  const c = {
    'wwww': `background: darkblue;`,

    'bwww': `background: blue; ::before{${topLeft('lightyellow')}};`,
    'wbww': `background: blue; ::before{${topRight('lightyellow')}};`,
    'wwbw': `background: blue; ::before{${bottomRight('lightyellow')}};`,
    'wwwb': `background: blue; ::before{${bottomLeft('lightyellow')}};`,
    'wwbb': `background: blue; ::before{${bottomHalf('lightyellow')}};`,
    'bwwb': `background: blue; ::before{${leftHalf('lightyellow')}};`,
    'bbww': `background: blue; ::before{${topHalf('lightyellow')}};`,
    'wbbw': `background: blue; ::before{${rightHalf('lightyellow')}};`,
    'wbbb': `background: lightyellow; ::before{${topLeft('blue')}};`,
    'bwbb': `background: lightyellow; ::before{${topRight('blue')}};`,
    'bbwb': `background: lightyellow; ::before{${bottomRight('blue')}};`,
    'bbbw': `background: lightyellow; ::before{${bottomLeft('blue')}};`,

    'bbbb': `background: yellow;`,

    'gbbb': `background: lightyellow; ::before{${topLeft('green')}};`,
    'bgbb': `background: lightyellow; ::before{${topRight('green')}};`,
    'bbgb': `background: lightyellow; ::before{${bottomRight('green')}};`,
    'bbbg': `background: lightyellow; ::before{${bottomLeft('green')}};`,
    'bbgg': `background: lightyellow; ::before{${bottomHalf('green')}};`,
    'gbbg': `background: lightyellow; ::before{${leftHalf('green')}};`,
    'ggbb': `background: lightyellow; ::before{${topHalf('green')}};`,
    'bggb': `background: lightyellow; ::before{${rightHalf('green')}};`,
    'bggg': `background: green; ::before{${topLeft('lightyellow')}};`,
    'gbgg': `background: green; ::before{${topRight('lightyellow')}};`,
    'ggbg': `background: green; ::before{${bottomRight('lightyellow')}};`,
    'gggb': `background: green; ::before{${bottomLeft('lightyellow')}};`,

    'bwbg': `background: lightyellow; ::before{${topRight('blue')}}; ::after{${bottomLeft('green')}};`,
    'bgbw': `background: lightyellow; ::before{${topRight('green')}}; ::after{${bottomLeft('blue')}};`,

    'gbwb': `background: lightyellow; ::before{${topLeft('green')}}; ::after{${bottomRight('blue')}};`,
    'wbgb': `background: lightyellow; ::before{${topLeft('blue')}}; ::after{${bottomRight('green')}};`,

    'gggg': `background: darkgreen;`,
  }[constraint];

  return c;
};

const Tile = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: all 400ms ease-in;
  border: 0 solid none;
  opacity: 0.5;
  ::before,
  ::after {
    content: '';
    display: block;
    width: 0%;
    height: 0%;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    position: absolute;
    transition: all 400ms ease-in;
  }
  ${({ tileId }) => getStyle(tileId)};
  ${({tileId}) => tileId === '****' && 'background: #ff03;'};
`;

export default {
  name: 'terrain',
  uncollapsed: '*',
  tileIds,
  Tile,
  weights: {
    w: 3, // water
    b: 3, // beach
    g: 3, // grass
  },
  wfcRules: [
    ['w','b']
    ['b','g']
  ],
};
