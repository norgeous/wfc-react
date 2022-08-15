import { useState, useEffect } from 'react';

const useGridDimensions = ({ elementWidth, elementHeight, size }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    setWidth(Math.floor(elementWidth / size));
    setHeight(Math.floor(elementHeight / size));
  }, [elementWidth, elementHeight, size]);

  return {
    width,
    height,
  };
};

export default useGridDimensions;
