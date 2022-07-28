// import styled from 'styled-components';
import { topLeft, topRight, bottomRight, bottomLeft, topHalf, rightHalf, bottomHalf, leftHalf } from '../style-mixins';

export const GridContainer = styled.pre`
  margin: 0;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const Item = styled.div`
  font-size: 146px;
  line-height: normal;
  font-family: monospace;
  position: relative;
  cursor: pointer;
  :hover {
    background: #222;
  }
  ${({ debug }) => debug && `box-shadow: inset 0 0 1px #0ff2;`}
`;


const config = [
  { '*': '25% 25%', 0: '50% 50%', 1: '0% 0%' },
  { '**': '50% 20%', '11': '50% 0%', '10':'25% 25%', '01': '75% 25%', '00': '50% 50%' },
  { '*': '75% 25%', 0: '50% 50%', 1: '100% 0%' },
  { '**': '80% 50%', '11': '100% 50%', '10': '75% 25%', '01': '75% 75%', '00': '50% 50%' },
  { '*': '75% 75%', 0: '50% 50%', 1: '100% 100%' },
  { '**': '50% 80%', '11': '50% 100%', '10': '75% 75%', '01': '25% 75%', '00': '50% 50%' },
  { '*': '25% 75%', 0: '50% 50%', 1: '0% 100%' },
  { '**': '20% 50%', '11': '0% 50%', '10': '25% 75%', '01': '25% 25%', '00': '50% 50%' },
];

const getShape = (constraint) => {
  const points = [
    config[0][constraint[0]],
    config[1][`${constraint[0]}${constraint[1]}`] || config[1]['**'],
    config[2][constraint[1]],
    config[3][`${constraint[1]}${constraint[2]}`] || config[3]['**'],
    config[4][constraint[2]],
    config[5][`${constraint[2]}${constraint[3]}`] || config[5]['**'],
    config[6][constraint[3]],
    config[7][`${constraint[3]}${constraint[0]}`] || config[7]['**'],
  ];

  return `polygon(${points.join()})`;
};

const backgrounds = {
  0: '#ff02',
  1: '#0ff3',
  2: '#0ff4',
  3: '#0ff5',
  4: '#f0f2',
};


const polygonPaths = {
  '0000': '50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
  
  '1000': '0% 0%, 5% 0%, 10% 0%, 10% 5%, 10% 10%, 5% 10%, 0% 10%, 0% 5%',
  '0100': '90% 0%, 95% 0, 100% 0%, 100% 5%, 100% 10%, 95% 10%, 90% 10%, 90% 5%',
  '0010': '90% 90%, 95% 90%, 100% 90%, 100% 95%, 100% 100%, 95% 100%, 90% 100%, 90% 95%',
  '0001': '0% 90%, 5% 90%, 10% 90%, 10% 95%, 10% 100%, 5% 100%, 0% 100%, 0% 95%',
  
  '1100': '0% 0%, 50% 0%, 100% 0, 100% 5%, 100% 10%, 50% 10%, 0% 10%, 0% 5%',
  '0110': '90% 0%, 95% 0%, 100% 0%, 100% 50%, 100% 100%, 95% 100%, 90% 100%, 90% 50%',
  '0011': '0% 90%, 50% 90%, 100% 90%, 100% 95%, 100% 100%, 50% 100%, 0% 100%, 0% 95%',
  '1001': '0% 0%, 5% 0%, 10% 0%, 10% 50%, 10% 100%, 5% 100%, 0% 100%, 0% 50%',
  
  '1110': '0% 0%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 90% 100%, 90% 10%, 0% 10%',
  '0111': '90% 90%, 90% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 90%',
  '1011': '0% 0%, 10% 0%, 10% 90%, 100% 90%, 100% 100%, 50% 100%, 0% 100%, 0% 50%',
  '1101': '0% 0%, 50% 0%, 100% 0%, 100% 10%, 10% 10%, 10% 100%, 0% 100%, 0% 50%',

  '1010': '0% 0%, 10% 0%, 55% 45%, 100% 90%, 100% 100%, 90% 100%, 45% 55%, 0% 10%',
  '0101': '45% 45%, 90% 0%, 100% 0%, 100% 10%, 55% 55%, 10% 100%, 0% 100%, 0% 90%',
  
  '1111': '0% 0%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%',
};

const getWallShape = (constraint) => {
  const points = polygonPaths[constraint];
  return `polygon(${points})`;
};






const getClipPath = ({ tilesetName, solveLevel, tileId }) => {
  const setup = {
    triangles: getShape(tileId),
    walls: solveLevel === 4 ? getWallShape(tileId) : getShape(tileId),
    terrain: solveLevel === 4 ? getShape('1111') : getShape([...tileId].map(d => d === '*' ? d : 1))
  };
  
  return setup[tilesetName];
};

export const TileBase = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: all 400ms ease-in;
  background: ${({ solveLevel }) => backgrounds[solveLevel]};
  clip-path: ${getClipPath};
`;







export const TerrainTile = styled(TileBase)`
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
  ${({tileId}) => ({
    'wwww': `background: darkblue;`,

    'cwww': `background: blue; ::before{${topLeft('lightyellow')}};`,
    'wcww': `background: blue; ::before{${topRight('lightyellow')}};`,
    'wwcw': `background: blue; ::before{${bottomRight('lightyellow')}};`,
    'wwwc': `background: blue; ::before{${bottomLeft('lightyellow')}};`,
    'wwcc': `background: blue; ::before{${bottomHalf('lightyellow')}};`,
    'cwwc': `background: blue; ::before{${leftHalf('lightyellow')}};`,
    'ccww': `background: blue; ::before{${topHalf('lightyellow')}};`,
    'wccw': `background: blue; ::before{${rightHalf('lightyellow')}};`,
    'wccc': `background: lightyellow; ::before{${topLeft('blue')}};`,
    'cwcc': `background: lightyellow; ::before{${topRight('blue')}};`,
    'ccwc': `background: lightyellow; ::before{${bottomRight('blue')}};`,
    'cccw': `background: lightyellow; ::before{${bottomLeft('blue')}};`,

    'cccc': `background: yellow;`,

    'gccc': `background: lightyellow; ::before{${topLeft('green')}};`,
    'cgcc': `background: lightyellow; ::before{${topRight('green')}};`,
    'ccgc': `background: lightyellow; ::before{${bottomRight('green')}};`,
    'cccg': `background: lightyellow; ::before{${bottomLeft('green')}};`,
    'ccgg': `background: lightyellow; ::before{${bottomHalf('green')}};`,
    'gccg': `background: lightyellow; ::before{${leftHalf('green')}};`,
    'ggcc': `background: lightyellow; ::before{${topHalf('green')}};`,
    'cggc': `background: lightyellow; ::before{${rightHalf('green')}};`,
    'cggg': `background: green; ::before{${topLeft('lightyellow')}};`,
    'gcgg': `background: green; ::before{${topRight('lightyellow')}};`,
    'ggcg': `background: green; ::before{${bottomRight('lightyellow')}};`,
    'gggc': `background: green; ::before{${bottomLeft('lightyellow')}};`,

    'cwcg': `background: lightyellow; ::before{${topRight('blue')}}; ::after{${bottomLeft('green')}};`,
    'cgcw': `background: lightyellow; ::before{${topRight('green')}}; ::after{${bottomLeft('blue')}};`,

    'gcwc': `background: lightyellow; ::before{${topLeft('green')}}; ::after{${bottomRight('blue')}};`,
    'wcgc': `background: lightyellow; ::before{${topLeft('blue')}}; ::after{${bottomRight('green')}};`,

    'gggg': `background: darkgreen;`,
  })[tileId]}
`;









export const Status = styled.div`
  position: absolute;
  font-size: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0ffa;
  text-align: center;
`;

export const Domain = styled.div`
  font-size: 30px;
  color: #0ff3;
`;

export const Top = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Right = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const Bottom = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const Left = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const SingleCell = styled.span`
  cursor: pointer;
  color: ${({ color }) => color};
  :hover {
    background-color: #222;
  }
`;

export const Corner = styled.a`
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  margin: 20px;
  font-size: 30px;
  line-height: 30px;
  :hover {
    background: #222;
  }
`;
