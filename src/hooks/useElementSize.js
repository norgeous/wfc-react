import { useRef, useState, useEffect } from 'react';

const useElementSize = () => {
  // const [elementRef, setElementRef] = useState();
  const elementRef = useRef();
  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  const handleResize = () => {
    if (elementRef?.current) {
      setElementWidth(elementRef.current.clientWidth);
      setElementHeight(elementRef.current.clientHeight);
    }
  };

  useEffect(() => {
    handleResize(); // trigger on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // console.log('useElementSize', elementRef);

  return { elementRef, elementWidth, elementHeight };
};

export default useElementSize;
