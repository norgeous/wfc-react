import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Button } from '../styled-components/form';

const Spin = () => '🌀';

const Buttons = () => {
  const {
    reset,
    randomize,

    collapseLowestEntropy,

    continual,
    toggleContinual,
    next,
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
      <Button onClick={next}>Next PRNG</Button>
    </>
  );
};

export default Buttons;
