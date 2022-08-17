import { useEffect, useState } from 'react';

const mersenne8 = 2 ** 31 - 1;
const cyv = 7 ** 5;

const sanitise = (seed) => {
  const newSeed = seed % mersenne8;
  return newSeed > 0 ? newSeed : newSeed + (mersenne8 - 1);
};

const usePRNG = (seed = 0) => {
  const [prn, setPrn] = useState();
  const prf = (prn - 1) / (mersenne8 - 1);
  
  const nextPrn = () => setPrn(prn => prn * cyv % mersenne8);
  const resetPrng = () => {
    setPrn(sanitise(seed));
    nextPrn();
  };

  useEffect(resetPrng, [seed]);

  return {
    prn,
    prf,
    nextPrn,
    resetPrng,
  };
};

export default usePRNG;
