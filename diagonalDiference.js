// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
// Calcular a diferença absoluta das diagonais de uma matriz quadrada
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let size = arr.length;
  let i = 0;

  let diagonalLeft = 0;
  let diagonalRight = 0;

  while (size > i) {
    diagonalLeft += arr[i][i];
    diagonalRight += arr[i][size - 1 - i];
    i++;
  }

  return Math.abs(diagonalLeft - diagonalRight);
}

console.log(diagonalDifference(arr));
