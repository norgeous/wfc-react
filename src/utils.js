// arrays are objects too!
export const randomFrom = (obj = {}) => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

export const weightedRandomFrom = (obj = {}, weights = []) => {
  const keys = Object.keys(obj);
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const r = Math.random() * totalWeight;
  let i, sum = 0;
  for (i in keys) {
    sum += weights[i];
    if (r <= sum) return obj[i];
  }
};

const arrayRotate = (arr) => {
  arr.unshift(arr.pop());
  return arr;
};

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

export const unique = (value, index, self) => self.indexOf(value) === index;
export const byXY = (x, y) => (cell) => cell.x === x && cell.y === y;

export function PRNG(seed = 0) {
  this._seed = seed % 2147483647;
  if (this._seed <= 0) this._seed += 2147483646;
}
PRNG.prototype.next = function () {
  return this._seed = this._seed * 16807 % 2147483647;
};
// We know that result of next() will be 1 to 2147483646 (inclusive).
PRNG.prototype.nextFloat = function () {
  return (this.next() - 1) / 2147483646;
};
