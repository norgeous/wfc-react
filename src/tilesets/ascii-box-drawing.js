import { AsciiTile } from '../styled-components/styled';

const tiles = {
  '0000': [' '],
  '0110': ['┌'],
  '0011': ['┐'],
  '1100': ['└'],
  '1001': ['┘'],
  '1110': ['├'],
  '1011': ['┤'],
  '0111': ['┬'],
  '1101': ['┴'],
  '1111': ['┼'],
  '0202': ['═'],
  '2020': ['║'],
  '0210': ['╒'],
  '0120': ['╓'],
  '0220': ['╔'],
  '0012': ['╕'],
  '0021': ['╖'],
  '0022': ['╗'],
  '1200': ['╘'],
  '2100': ['╙'],
  '2200': ['╚'],
  '1002': ['╛'],
  '2001': ['╜'],
  '2002': ['╝'],
  '1210': ['╞'],
  '2120': ['╟'],
  '2220': ['╠'],
  '1012': ['╡'],
  '2021': ['╢'],
  '2022': ['╣'],
  '0212': ['╤'],
  '0121': ['╥'],
  '0222': ['╦'],
  '1202': ['╧'],
  '2101': ['╨'],
  '2202': ['╩'],
  '1212': ['╪'],
  '2121': ['╫'],
  '2222': ['╬'],
};

const SvgTextIcon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <text
      font-size="80"
      x="50%"
      y="54%"
      text-anchor="middle"
      dominant-baseline="middle" 
    >
      {children}
    </text>
  </svg>
);

export default {
  name: 'ascii box drawing',
  TileFace: (props) => (
    <AsciiTile tilesetName="ascii" {...props}>
      <SvgTextIcon>
        {tiles?.[props.tileId]?.[0]}
      </SvgTextIcon>
    </AsciiTile>
  ),
  tileConfig: Object.keys(tiles).map(key => ({ pattern: key })),
};
