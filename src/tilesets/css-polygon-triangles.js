const Tile = styled.div`
  background: #f0f3;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  clip-path: polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%);
  transition: clip-path 1s ease-in;
  ${({ tileId }) => ({
    '****': `clip-path: polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%);`,
    '0000': `clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);`,
    '1001': `clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%);`,
    '1100': `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 50%);`,
    '0011': `clip-path: polygon(0% 0%, 50% 50%, 100% 100%, 0% 100%);`,
    '0110': `clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%);`,
    '1111': `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);`,
  }[tileId])}
`;

export default {
  name: 'css polygon triangles',
  uncollapsed: '****',
  tileIds: [ '0000', '1111', '1001', '1100', '0011', '0110' ],
  Tile,
};
