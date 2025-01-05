// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=truehttps://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
// compara os dois arrays a acrescenta um ponto ao array de maior valor
let a = [5, 6, 7];
let b = [3, 6, 10];

function compare(a, b) {
  let score = [0, 0];
  let length = a.length;

  while (length >= 0) {
    a[length] > b[length] && score[0]++;
    b[length] > a[length] && score[1]++;

    length--;
  }

  return score;
}

console.log(compare(a, b));
