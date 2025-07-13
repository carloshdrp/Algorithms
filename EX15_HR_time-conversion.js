// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
// Converter o tempo do formato de 12 horas para 24;
let s = "12:01:00PM";

function timeConversion(s) {
  let timeSplit = s.split(":");
  let period = timeSplit[2].slice(2);
  let regex = /[AP]M/;

  let hours = Number(timeSplit[0]);
  let minutes = timeSplit[1];
  let seconds = timeSplit[2].replace(regex, "");

  if (period === "PM") {
    if (hours != 12) {
      hours += 12;
    }
  } else if (hours == 12) {
    hours = "00";
  } else if (hours < 10) {
    hours = "0" + hours;
  }
  return String(hours + ":" + minutes + ":" + seconds);
}

console.log(timeConversion(s));
