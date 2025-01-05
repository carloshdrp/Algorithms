// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
// Encontrar a maior e menor soma de 4 dos 5 itens;
let arr = [1, 3, 5, 7, 9];

function mimMaxSum(arr) {
  let arrSum = [0, 0, 0, 0, 0];
  let min = null;
  let max = null;

  arr.map((i, h) => {
    arr.map((j, k) => {
      if (h !== k) {
        arrSum[k] += i;
      }
    });
  });

  arrSum.map((i) => {
    if (min == null) {
      min = i;
      max = i;
    }

    if (i > max) {
      max = i;
    }

    if (i < min) {
      min = i;
    }
  });

  return min, max;
}

console.log(mimMaxSum(arr));
