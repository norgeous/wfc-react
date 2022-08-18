import React, { createContext, useContext, useState, useEffect } from 'react';
import useTileset from '../hooks/useTileset';
import useElementSize from '../hooks/useElementSize';
import useGridDimensions from '../hooks/useGridDimensions';
import useWFCGrid from '../hooks/useWFCGrid';
import useWFCCollapser from '../hooks/useWFCCollapser';
import usePRNG from '../hooks/usePRNG';
import { randomFrom } from '../utils';

const AppContext = createContext({});

const fpsSteps = [
  1000,
  100,
  10,
  1,
  0,
];

export const AppProvider = ({
  routes,
  defaultRoute,
  defaultTilesetName,
  defaultSize,
  defaultFpsStep,
  children,
}) => {
  const [route, setRoute] = useState(defaultRoute);

  const {
    tilesetNames,
    selectedTilesetName,
    setSelectedTilesetName,
    tileset,
    tiles,
    points,
    updatePatternConfig,
  } = useTileset(defaultTilesetName);

  const [size, setSize] = useState(defaultSize);
  const { elementRef, elementWidth, elementHeight } = useElementSize();
  const { width, height } = useGridDimensions({ elementWidth, elementHeight, size });

  const [fpsStep, setFpsStep] = useState(defaultFpsStep);
  const fps = fpsSteps[fpsStep];

  const {
    grid,
    tileGrid,
    getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
    reset,
    randomize,
  } = useWFCGrid({
    w: width + 1,
    h: height + 1,
    tiles,
    points,
  });

  const {
    collapseSingle,
    collapse4,
  } = useWFCCollapser({
    tiles,
    getCellByXY,
    getCellNeighboursByXY,
    getTileValue,
    updateCellByXY,
  });

  const [continual, setContinual] = useState(false);
  const toggleContinual = () => setContinual(old => !old);

  const collapseLowestEntropy = () => {
    const unsolvedTiles = tileGrid.filter(({ solveLevel, valid }) => solveLevel < 4 || !valid);
    const lowestEntropy = unsolvedTiles.reduce((acc, { solveLevel }) => solveLevel > acc ? solveLevel : acc, 0);
    const lowestEntropyTiles = unsolvedTiles.filter(({ solveLevel }) => solveLevel === lowestEntropy);
    const nextTile = randomFrom(lowestEntropyTiles);
    if (nextTile) collapse4(nextTile.x, nextTile.y);
    else setContinual(false);
  };

  useEffect(() => {
    if (continual) {
      const t = setInterval(collapseLowestEntropy, fps);
      return () => clearInterval(t);
    }
  }, [tileGrid, continual, fps]);

  const [debug, setDebug] = useState(false);

  const [seed, setSeed] = useState(0);
  const {
    prngStepCount,
    prn,
    prf,
    nextPrn,
    resetPrng,
  } = usePRNG(seed);

  return (
    <AppContext.Provider
      value={{
        route,
        routes,
        setRoute,

        tilesetNames,
        selectedTilesetName,
        setSelectedTilesetName,
        tileset,
        tiles,
        points,
        updatePatternConfig,

        size,
        setSize,

        fpsStep,
        setFpsStep,
        fps,

        elementRef,
        width,
        height,

        grid,
        tileGrid,
        getCellByXY,
        getCellNeighboursByXY,
        getTileValue,
        updateCellByXY,
        reset,
        randomize,

        collapseSingle,
        collapse4,
        collapseLowestEntropy,

        continual,
        toggleContinual,

        debug,
        setDebug,

        seed,
        setSeed,
        prngStepCount,
        prn,
        prf,
        nextPrn,
        resetPrng,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
