import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '../styled-components/form';

const Spin = () => <span className="spin">🌀</span>;

const Buttons = () => {
  const {
    reset,
    randomize,

    collapseLowestEntropy,

    continual,
    toggleContinual,
  } = useAppContext();

  return (
    <>
      <Button onClick={randomize}>Randomize</Button>

      <Button onClick={collapseLowestEntropy}>Collapse Next</Button>

      <Button onClick={toggleContinual}>
        Solve All 
        {continual && <Spin size="small" />}
      </Button>

      <Button onClick={reset}>Reset</Button>
    </>
  );
};

export default Buttons;
