// import styled from 'styled-components';

export const TileGrid = styled.div`
  height: calc(100vh - 64px);
  display: grid;
  grid-template-columns: ${({width, size}) => `repeat(${width}, ${size}px)`};
  grid-template-rows: ${({height, size}) => `repeat(${height}, ${size}px)`};
  justify-content: center;
  align-content: center;
  place-content: center;
  position: relative;
  overflow: hidden;
`;

export const Tile = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  :hover {
    background: #222;
  }
`;

export const PointGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({width}) => width + 1}, 0);
  grid-template-rows: repeat(${({height}) => height + 1}, 0);
  gap: ${({size}) => size}px;
  justify-content: center;
  align-content: center;
  place-content: center;
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export const Point = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  pointer-events: auto;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  color: black;
  opacity: ${({ debug }) => debug ? 1 : 0};
  background: #0ff2;
  :hover {
    opacity: 1;
    background-color: #222;
  }
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

const shapeWhitelist = ['*','0','1'];
const getShape = (constraint) => {
  const constraint2 = [...constraint].map(d => shapeWhitelist.includes(d) ? d : 1);

  const points = [
    config[0][constraint2[0]],
    config[1][`${constraint2[0]}${constraint2[1]}`] || config[1]['**'],
    config[2][constraint2[1]],
    config[3][`${constraint2[1]}${constraint2[2]}`] || config[3]['**'],
    config[4][constraint2[2]],
    config[5][`${constraint2[2]}${constraint2[3]}`] || config[5]['**'],
    config[6][constraint2[3]],
    config[7][`${constraint2[3]}${constraint2[0]}`] || config[7]['**'],
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


const wallPolygonPaths = {
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
  const points = wallPolygonPaths[constraint];
  return `polygon(${points})`;
};






const getClipPath = ({ tilesetName, solveLevel, tileId }) => {
  const setup = {
    triangles: getShape(tileId),
    walls: solveLevel === 4 ? getWallShape(tileId) : getShape(tileId),
    terrain: getShape([...tileId].map(d => d === '*' ? d : 1)),
  };
  
  return setup[tilesetName];
};

export const TileBase = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: all 400ms ease-in;
  background: ${({ valid, solveLevel }) => {
    if (!valid) return '#f002'; 
    return backgrounds[solveLevel];
  }};
  clip-path: ${getClipPath};
`;

const tc = {
  s: 'darkblue', // deep sea
  w: 'lightblue', // costal water
  c: 'yellow', // coast
  g: 'lawngreen', // grass
  f: 'darkgreen', // forest
  m: 'snow', // mountain
};
export const TerrainTile = styled(TileBase)`
  background-image:
    radial-gradient(at top left, ${({ tileId }) => tc[tileId[0]]}, transparent),
    radial-gradient(at top right, ${({ tileId }) => tc[tileId[1]]}, transparent),
    radial-gradient(at bottom right, ${({ tileId }) => tc[tileId[2]]}, transparent),
    radial-gradient(at bottom left, ${({ tileId }) => tc[tileId[3]]}, transparent);
  background-blend-mode: darken;
`;
