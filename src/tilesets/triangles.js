import { TileBase } from '../styled-components/styled';

export default {
  name: 'triangles',
  TileFace: (props) => <TileBase tilesetName="triangles" {...props} />,
  tileConfig: [
    { pattern: '0000', enabled: false },
    { pattern: '1000', rotate: true, enabled: false},
    { pattern: '1100', rotate: true },
    { pattern: '1010', rotate: true, enabled: false },
    { pattern: '1110', rotate: true },
    { pattern: '1111', enabled: false },
  ],
};
