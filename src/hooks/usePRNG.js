import { useState } from 'react';

const mersenne8 = 2 ** 31 - 1;

const sanitise = (seed) => {
  const newSeed = Math.abs(seed) % mersenne8;
  return newSeed > 0 ? newSeed : newSeed + (mersenne8 - 1);
};

const usePRNG = (seed = 0) => {
  const [pointer, setPointer] = useState(sanitise(seed));
  
  const next = () => {
    setPointer((pointer * (7**5)) % mersenne8);
  };
  
  const float = (pointer - 1) / (mersenne8 - 1);

  return {
    seed,
    pointer,
    float,
    next,
  };
};

export default usePRNG;
