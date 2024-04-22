export const getNumbers = (from: number, to: number): number[] => {
  const numbers: Array<number> = [];

  for (let n = from; n < to; n += 1) {
    numbers.push(n);
  }

  return numbers;
};
