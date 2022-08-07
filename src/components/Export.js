import { Space, Input } from 'antd';
import { useAppContext } from '../contexts/AppContext';

const { TextArea } = Input;

const Export = () => {
  const { grid } = useAppContext();

  const exportText = Object.values(grid.reduce((acc, point) => {
    return {
      ...acc,
      [point.y]: `${acc[point.y] || ''} ${point.v}`,
    };
  }, {})).join('\n');

  return (
    <pre style={{ textAlign: 'center', marginTop: 40 }}>
      {exportText}
    </pre>
  );
};

export default Export;
