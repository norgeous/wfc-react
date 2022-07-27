const config = [
  { '*': '25% 25%', 0: '50% 50%', 1: '0% 0%' },
  { '*': '75% 25%', 0: '50% 50%', 1: '100% 0%' },
  { '*': '75% 75%', 0: '50% 50%', 1: '100% 100%' },
  { '*': '25% 75%', 0: '50% 50%', 1: '0% 100%' },
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
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: all 400ms ease-in;
  clip-path: ${({ tileId }) => getShape(tileId)};
  background: ${({ solveLevel }) => ({
    0: '#ff02',
    1: '#0ff3',
    2: '#0ff4',
    3: '#0ff5',
    4: '#f0f2',
  })[solveLevel]};
`;

export default {
  name: 'triangles',
  uncollapsed: '*',
  Tile,
  wfc: {
    '*': {
      color: '#ff02',
      canTouch: '01',
    },
    0: {
      weight: 3,
      color: '#222',
      canTouch: '01',
    },
    1: {
      weight: 3,
      color: '#f0f2',
      canTouch: '01',
      patterns: ['1000', '1100', '1110'],
    },
  },
};
