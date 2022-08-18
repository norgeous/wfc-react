import { useEffect, useState } from 'react';

const mersenne8 = 2 ** 31 - 1;
const cyv = 7 ** 5;

const sanitise = (seed) => {
  const newSeed = seed % mersenne8;
  return newSeed > 0 ? newSeed : newSeed + (mersenne8 - 1);
};

const usePRNG = (seed = 0) => {
  const [prngStepCount, setPrngStepCount] = useState(0);
  const [prn, setPrn] = useState();
  const prf = (prn - 1) / (mersenne8 - 1);
  
  const nextPrn = () => {
    setPrn(prn => prn * cyv % mersenne8);
    setPrngStepCount(s => s + 1);
  };
  const resetPrng = () => {
    setPrn(sanitise(seed));
    setPrngStepCount(0);
    nextPrn();
  };

  useEffect(resetPrng, [seed]);

  return {
    prngStepCount,
    prn,
    prf,
    nextPrn,
    resetPrng,
  };
};

export default usePRNG;
