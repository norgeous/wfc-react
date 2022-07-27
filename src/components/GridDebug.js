import { SingleCell } from './styled';

const GridDebug = ({ tileset, rawGrid, collapseSingle }) => {
  return (
    <>
      <pre style={{lineHeight: '16px', fontSize: 16, textAlign: 'center', overflow: 'hidden'}}>
        {`${rawGrid[0].length}×${rawGrid.length}`}

        {rawGrid?.map((row, y) => (
          <div key={y}>
            {row.map((cell, x) => (
              <SingleCell
                key={x}
                color={tileset.wfc[cell]?.color || 'red'}
                onClick={() => collapseSingle(x, y)}
              >
                {cell || '?'}
              </SingleCell>
            ))}
          </div>
        ))}
      </pre>
    </>
  );
};

export default GridDebug;
