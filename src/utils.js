// arrays are objects too!
export const randomFrom = (obj = {}) => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

export const weightedRandomFrom = (obj = {}, weights = []) => {
  // console.log({obj, weights});
  const keys = Object.keys(obj);
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const r = Math.random() * totalWeight;
  let i, sum = 0;
  for (i in keys) {
    sum += weights[i];
    if (r <= sum) return obj[i];
  }
};
