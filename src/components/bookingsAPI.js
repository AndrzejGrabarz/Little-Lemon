/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-mixed-operators */
const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

export function fetchAPI(date) {
  const result = [];
  const dt = new Date(date);
  const seed = dt.getDate();

  const random = seededRandom(seed);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
