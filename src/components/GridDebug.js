const GridDebug = ({ rawGrid }) => {
  return (
    <pre style={{lineHeight: '12px', textAlign: 'center', overflow: 'hidden'}}>
      {rawGrid?.map(row => row.join('')).join('\n')}
    </pre>
  );
};

export default GridDebug;
