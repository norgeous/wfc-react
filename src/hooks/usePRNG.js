import { useEffect, useState } from 'react';

const mersenne8 = 2 ** 31 - 1;
const cyv = 7 ** 5;

const sanitise = (seed) => {
  const newSeed = seed % mersenne8;
  return newSeed > 0 ? newSeed : newSeed + (mersenne8 - 1);
};

let prn, prf;

const usePRNG = (seed = 0) => {
  const [stepCount, setStepCount] = useState(0);
  
  const next = () => {
    prn = prn * cyv % mersenne8;
    prf = (prn - 1) / (mersenne8 - 1);
    setStepCount(s => s + 1);
  };

  const reset = () => {
    prn = sanitise(seed);
    prf = (prn - 1) / (mersenne8 - 1);
    setStepCount(0);
    next();
  };

  const randomFrom = (obj) => {
    const keys = Object.keys(obj);
    const item = obj[keys[keys.length * prf << 0]];
    next();
    return item;
  };

  const weightedRandomFrom = (obj, weights) => {
    const keys = Object.keys(obj);
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const r = prf * totalWeight;
    next();
    let i, sum = 0;
    for (i in keys) {
      sum += weights[i];
      if (r <= sum) return obj[i];
    }
  };

  useEffect(reset, [seed]);

  const prng = {
    seed,
    stepCount,
    prn,
    prf,
    next,
    reset,
    randomFrom,
    weightedRandomFrom,
  };

  return prng;
};

export default usePRNG;
