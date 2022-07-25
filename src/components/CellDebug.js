import {
  Status,
  Domain,
  Top,
  Right,
  Bottom,
  Left
} from './styled';

const CellDebug = ({ value }) => {
  const bits = (value ? value.split('') : ['?','?','?','?'])
    .map(v => v === '*' ? '✧' : v);

  return (
    <>
      <Top>{bits[0]}</Top>
      <Right>{bits[1]}</Right>
      <Bottom>{bits[2]}</Bottom>
      <Left>{bits[3]}</Left>
      <Status>
        {value}
        <Domain>
          {[...value].reduce((count, char) => char === '*' ? count + 1 : count, 0)}
        </Domain>
      </Status>
    </>
  );
};

export default CellDebug;
