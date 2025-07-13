// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=false
// Encontrar o maior valor do array e retornar quantas vezes ele aparece
let arr = [3, 2, 1, 3];

function birthdayCakeCandles(arr) {
  let tallest = Math.max(...arr);

  return arr.filter((num) => num === tallest).length;
}

console.log(birthdayCakeCandles(arr));
