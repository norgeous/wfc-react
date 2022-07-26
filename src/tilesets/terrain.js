const tileIds = [
  'wwww',
 
  'wwwb',
  'bwww',
  'wbww',
  'wwbw',

  'wwbb',
  'bwwb',
  'bbww',
  'wbbw',

  'wbbb',
  'bwbb',
  'bbwb',
  'bbbw',

  'bbbb',

  // 'bbgg',

  // 'gggg',
];

const getStyle = (constraint) => {
  const c = {
    'wwww': `
      background: darkblue;
    `,

    'wwwb': `
      background: blue;
      :after {
        bottom: 0;
        left: 0;
        width: 50%;
        height: 50%;
        background: yellow;
        border-top-right-radius: 50%;
      }
    `,
    'bwww': `
      background: blue;
      :after {
        top: 0;
        left: 0;
        width: 50%;
        height: 50%;
        background: yellow;
        border-bottom-right-radius: 50%;
      }
    `,
    'wbww': `
      background: blue;
      :after {
        top: 0;
        right: 0;
        width: 50%;
        height: 50%;
        background: yellow;
        border-bottom-left-radius: 50%;
      }
    `,
    'wwbw': `
      background: blue;
      :after {
        right: 0;
        bottom: 0;
        width: 50%;
        height: 50%;
        background: yellow;
        border-top-left-radius: 50%;
      }
    `,

    'wwbb': `
      background: blue;
      :after {
        width: 100%;
        height: 50%;
        left: 0;
        bottom: 0;
        background: yellow;
      }
    `,
    'bwwb': `
      background: blue;
      :after {
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        background: yellow;
      }
    `,
    'bbww': `
      background: blue;
      :after {
        width: 100%;
        height: 50%;
        top: 0;
        left: 0;
        background: yellow;
      }
    `,
    'wbbw': `
      background: blue;
      :after {
        width: 50%;
        height: 100%;
        top: 0;
        right: 0;
        background: yellow;
      }
    `,

    'wbbb': `
      background: yellow;
      :after {
        top: 0;
        left: 0;
        width: 50%;
        height: 50%;
        background: blue;
        border-bottom-right-radius: 50%;
      }
    `,
    'bwbb': `
      background: yellow;
      :after {
        top: 0;
        right: 0;
        width: 50%;
        height: 50%;
        background: blue;
        border-bottom-left-radius: 50%;
      }
    `,
    'bbwb': `
      background: yellow;
      :after {
        right: 0;
        bottom: 0;
        width: 50%;
        height: 50%;
        background: blue;
        border-top-left-radius: 50%;
      }
    `,
    'bbbw': `
      background: yellow;
      :after {
        bottom: 0;
        left: 0;
        width: 50%;
        height: 50%;
        background: blue;
        border-top-right-radius: 50%;
      }
    `,

    'bbbb': `
      background: lightyellow;
    `,

    'bbgg': `
      border-top: 50px solid lightyellow;
      background: green;
    `,

    'gggg': `
      background: green;
    `,
  }[constraint];

  return c;
};

const Tile = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: all 400ms ease-in;
  border: 0 solid none;
  opacity: 0.5;
  :after {
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
};
