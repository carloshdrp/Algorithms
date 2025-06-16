// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
// Classicação de repetições por contagem
let arr = [1, 1, 3, 2, 1];

function countingSort(arr) {
  let counting = Array(100).fill(0);

  arr.map((i) => {
    counting[i]++;
  });

  return counting;
}

console.log(countingSort(arr));
