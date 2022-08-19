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
