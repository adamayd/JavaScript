const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let secPosition = sec * 6;
let minPosition = (min * 6) + (secPosition / 60);
let hrPosition = (hr * 30) + (30 * (min / 60));


function runTheClock() {

  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
