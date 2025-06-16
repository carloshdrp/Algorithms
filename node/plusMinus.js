// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
// Calcular a proporção de negativos, positivos e zero;
let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let sums = [0, 0, 0];

  arr.forEach((i) => {
    if (i > 0) {
      sums[0]++;
    } else if (i < 0) {
      sums[1]++;
    } else {
      sums[2]++;
    }
  });

  return sums.map((i) => (i / arr.length).toFixed(6));
}

plusMinus(arr).map((i) => console.log(i));
