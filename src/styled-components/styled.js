import React from 'react';
import styled from 'styled-components';

export const TileGrid = styled.div`
  /* height: calc(100vh - 64px); */
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
  position: relative;
  ${({ valid }) => !valid && `
    :after {
      content: '';
      position: absolute;
      inset: 5%;
      border: 1px solid #f007;
    }
  `}
  :hover {
    :after {
      pointer-events: none;
      content: '';
      position: absolute;
      inset: 0;
      border: 1px solid #777;
    }
  }
  overflow: hidden;
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
  width: ${({ size }) => size/3}px;
  height: ${({ size }) => size/3}px;
  line-height: 0;
  font-size: ${({ size }) => size/5}px;
  text-align: center;
  border-radius: 50%;
  opacity: ${({ debug }) => debug ? 1 : 0};
  background: #022;
  color: #888;
  :hover {
    opacity: 1;
    background-color: #111;
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
  0: '#220',
  1: '#033',
  2: '#044',
  3: '#055',
  4: '#505',
};

const wallPolygonPaths = {
  '0000': '50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
  
  '1000': '0% 0%, 5% 0%, 10% 0%, 10% 5%, 10% 10%, 5% 10%, 0% 10%, 0% 5%',
  '0100': '90% 0%, 95% 0, 101% 0%, 101% 5%, 101% 10%, 95% 10%, 90% 10%, 90% 5%',
  '0010': '90% 90%, 95% 90%, 101% 90%, 101% 95%, 101% 101%, 95% 101%, 90% 101%, 90% 95%',
  '0001': '0% 90%, 5% 90%, 10% 90%, 10% 95%, 10% 101%, 5% 101%, 0% 101%, 0% 95%',
  
  '1100': '0% 0%, 50% 0%, 101% 0, 101% 5%, 101% 10%, 50% 10%, 0% 10%, 0% 5%',
  '0110': '90% 0%, 95% 0%, 101% 0%, 101% 50%, 101% 101%, 95% 101%, 90% 101%, 90% 50%',
  '0011': '0% 90%, 50% 90%, 101% 90%, 101% 95%, 101% 101%, 50% 101%, 0% 101%, 0% 95%',
  '1001': '0% 0%, 5% 0%, 10% 0%, 10% 50%, 10% 101%, 5% 101%, 0% 101%, 0% 50%',
  
  '1110': '0% 0%, 50% 0%, 101% 0%, 101% 50%, 101% 101%, 90% 101%, 90% 10%, 0% 10%',
  '0111': '90% 90%, 90% 0%, 101% 0%, 101% 50%, 101% 101%, 50% 101%, 0% 101%, 0% 90%',
  '1011': '0% 0%, 10% 0%, 10% 90%, 101% 90%, 101% 101%, 50% 101%, 0% 101%, 0% 50%',
  '1101': '0% 0%, 50% 0%, 101% 0%, 101% 10%, 10% 10%, 10% 101%, 0% 101%, 0% 50%',

  '1010': '0% 0%, 10% 0%, 55% 45%, 101% 90%, 101% 101%, 90% 101%, 45% 55%, 0% 10%',
  '0101': '45% 45%, 90% 0%, 101% 0%, 101% 10%, 55% 55%, 10% 101%, 0% 101%, 0% 90%',
  
  '1111': '0% 0%, 50% 0%, 101% 0%, 101% 50%, 101% 101%, 50% 101%, 0% 101%, 0% 50%',
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
    ascii: getShape([...tileId].map(d => d === '*' ? d : 1)),
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

const tc = {
  s: 'darkblue', // deep sea
  w: 'blue', // costal water
  c: 'yellow', // coast
  g: 'lawngreen', // grass
  f: 'darkgreen', // forest
  m: 'snow', // mountain
};

export const TerrainTile = ({ tileId, ...props }) => {
  return (
    <TileBase tileId={tileId} {...props}>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        <g style={{ filter: 'blur(10px)' }}>
          <path d="M -50 -50 h 100 v 100 h -100 z" fill={tc[tileId[0]] || 'transparent'} />
          <path d="M 50 -50  h 100 v 100 h -100 z" fill={tc[tileId[1]] || 'transparent'} />
          <path d="M 50 50   h 100 v 100 h -100 z" fill={tc[tileId[2]] || 'transparent'} />
          <path d="M -50 50  h 100 v 100 h -100 z" fill={tc[tileId[3]] || 'transparent'} />
        </g>
      </svg>
    </TileBase>
  );
};

export const AsciiTile = styled(TileBase)`
  ${({ solveLevel }) => solveLevel === 4 && `
    transform: scale(2.5) rotate(-45deg);
  `}
  :hover {
    transform: none;
    padding-top: 4%;
  }
`;
