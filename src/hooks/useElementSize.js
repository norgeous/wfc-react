import { useState, useEffect } from 'react';

const useElementSize = (elementRef) => {
  // const [elementRef, setElementRef] = useState();
  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    if (elementRef?.current) {
      setElementWidth(elementRef.current.clientWidth);
      setElementHeight(elementRef.current.clientHeight);
    }
  });

  console.log('useElementSize', elementRef);

  return { elementWidth, elementHeight };
};

export default useElementSize;
