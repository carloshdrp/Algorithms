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
