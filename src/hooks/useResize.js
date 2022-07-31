const useResize = (tileSize) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(Math.floor((window.innerWidth - 200) / tileSize));
      setHeight(Math.floor((window.innerHeight - 64) / tileSize));
    };

    handleResize(); // trigger on mount

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [tileSize]);


  return { width, height };
};

export default useResize;
