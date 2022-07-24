const useResize = () => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth -200);
      setHeight(window.innerHeight -64);
    };

    handleResize(); // trigger on mount

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { vw: width, vh: height };
};

export default useResize;
