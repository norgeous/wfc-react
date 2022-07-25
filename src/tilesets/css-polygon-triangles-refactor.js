const config = [
  {
    '*': '25% 25%',
    0: '50% 50%',
    1: '0% 0%',
  },
  {
    '*': '75% 25%',
    0: '50% 50%',
    1: '100% 0%',
  },
  {
    '*': '75% 75%',
    0: '50% 50%',
    1: '100% 100%',
  },
  {
    '*': '25% 75%',
    0: '50% 50%',
    1: '0% 100%',
  },
];

const tileIds = [
  '0000',

  '1000',
  '0100',
  '0010',
  '0001',

  '1100',
  '0110',
  '0011',
  '1001',

  '1110',
  '0111',
  '1011',
  '1101',
  
  '1111',
];

const getShape = (constraint) => {
  const points = [
    config[0][constraint[0]],
    config[1][constraint[1]],
    config[2][constraint[2]],
    config[3][constraint[3]],
  ];

  return `polygon(${points.join()})`;
};

const Tile = styled.div`
  background:
    url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%22 y=%2280%22 text-anchor=%22middle%22 font-size=%2290%22 opacity=%22.1%22>💗</text></svg>")
    #f0f3;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: all 400ms ease-in;
  clip-path: ${({ tileId }) => getShape(tileId)};
  ${({tileId}) => !tileIds.includes(tileId) && 'background: #0ff3;'}
  ${({tileId}) => tileId === '****' && 'background: #ff03;'};
  ${({tileId}) => !tileId.includes('*') && !tileIds.includes(tileId) && `
    clip-path: none;
    background: #f003;
  `}
`;

export default {
  name: 'css polygon triangles refactor',
  uncollapsed: '*',
  tileIds,
  Tile,
};
