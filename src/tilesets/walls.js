import { TileBase } from '../components/styled';

export default {
  name: 'walls',
  TileFace: (props) => <TileBase tilesetName="walls" {...props} />,
  tileConfig: [
    { pattern: '0000' },
    { pattern: '1000', rotate: true },
    { pattern: '1100', rotate: true },
    { pattern: '1010', rotate: true },
    { pattern: '1110', rotate: true },
    { pattern: '1111' },
  ],
};
