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

export const unique = (value, index, self) => self.indexOf(value) === index;

const arrayRotate = (arr) => {
  // arr.push(arr.shift());
  arr.unshift(arr.pop())
  return arr;
}

export const rotate4 = (arr) => {
  const r1 = arrayRotate([...arr]);
  const r2 = arrayRotate([...r1]);
  const r3 = arrayRotate([...r2]);
  return [
    arr,
    r1.join(''),
    r2.join(''),
    r3.join(''),
 ];
};
