const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let x=360/60
let secPosition = x*sec;
let minPosition = (x*min) + (sec*x/60);
let hrPosition =(x*hr/12) + (min*x/12);

function runClock(){
  //get degrees
  hrPosition = hrPosition+(1/12);
  minPosition = minPosition+(0.1);
  secPosition = secPosition+6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//run every second - setInterval methods
var interval  = setInterval(runClock, 1000); //every sec - 10_3 milsec
