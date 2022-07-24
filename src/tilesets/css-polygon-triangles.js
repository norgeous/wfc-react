const Tile = styled.div`
  background:
    url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%22 y=%2280%22 text-anchor=%22middle%22 font-size=%2290%22 opacity=%22.1%22>💗</text></svg>")
    #f0f3;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: clip-path 1s ease-in;
  ${({ tileId }) => ({
    '****': `clip-path: polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%);`,
    '0000': `clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);`,

    // '1000': `clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 50% 50%);`,
    // '0100': `clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 50% 50%);`,
    // '0010': `clip-path: polygon(50% 50%, 50% 50%, 100% 100%, 0% 100%);`,
    // '0001': `clip-path: polygon(0% 0%, 50% 50%, 50% 50%, 0% 100%);`,

    '1100': `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 50%);`,
    '0110': `clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%);`,
    '0011': `clip-path: polygon(0% 0%, 50% 50%, 100% 100%, 0% 100%);`,
    '1001': `clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%);`,

    // '1110': `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%);`,
    // '0111': `clip-path: polygon(0% 0%, 50% 50%, 100% 0%, 100% 100%, 0% 100%);`,
    // '1011': `clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%);`,
    // '1101': `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 50%, 0% 100%);`,

    '1111': `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);`,
  }[tileId])}
`;

export default {
  name: 'css polygon triangles',
  uncollapsed: '****',
  tileIds: [
    '0000',
    // '1000',
    // '0100',
    // '0010',
    // '0001',
    '1100',
    '0110',
    '0011',
    '1001',
    // '1110',
    // '0111',
    // '1011',
    // '1101',
    '1111',
  ],
  Tile,
};
