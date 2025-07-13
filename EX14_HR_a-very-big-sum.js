// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
// somar os itens do array
let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function bigSum(arr) {
  let sum = 0;
  for (i of arr) {
    sum += i;
  }

  return sum;
}

console.log(bigSum(arr));
