const Tile = styled.div`
  background: #f0f3;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${({ tileId, size }) => ({
    '****': `
      width: ${size}px;
      height: ${size}px;
      background: #f0f2;
    `,
    '0000': `
      width: ${size}px;
      height: ${size}px;
    `,
    '1001': `
      width: 0;
      height: 0;
      border-top: ${size}px solid #555;
      border-right: ${size}px solid transparent;
    `,
    '1100': `
      width: 0;
      height: 0;
      border-top: ${size}px solid #555;
      border-left: ${size}px solid transparent;
    `,
    '0011': `
      width: 0;
      height: 0;
      border-bottom: ${size}px solid #555;
      border-right: ${size}px solid transparent;
    `,
    '0110': `
      width: 0;
      height: 0;
      border-bottom: ${size}px solid #555;
      border-left: ${size}px solid transparent;
    `,
    '1111': `
      width: ${size}px;
      height: ${size}px;
      background: #555;
    `,
  }[tileId])}
`;

export default {
  name: 'css triangles',
  uncollapsed: '****',
  tileIds: [ '0000', '1111', '1001', '1100', '0011', '0110' ],
  Tile,
};
