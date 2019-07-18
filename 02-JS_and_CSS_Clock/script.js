let currentTime;
let secondPosition;
let minPosition;
let hourPosition;
let milliPosition;

setInterval(update, 10);

function update() {
  currentTime = new Date();
  secondPosition = currentTime.getSeconds() * 6 + 90;
  minPosition = currentTime.getMinutes() * 6 + 90;
  hourPosition = currentTime.getHours() * 30 + 90;
  milliPosition = currentTime.getMilliseconds() * 0.36 - 270;
  //account for position of milli-hand at 1000 ms. 1000 * 0.36 + 90 = 420, so subtract 270 instead. Range is then -270 to 90 degrees

  document.querySelector("div.second-hand").parentElement.style.transform = `rotate(${secondPosition}deg)`;
  document.querySelector("div.min-hand").parentElement.style.transform = `rotate(${minPosition}deg)`;
  document.querySelector("div.hour-hand").parentElement.style.transform = `rotate(${hourPosition}deg)`;
  document.querySelector("div.milli-hand").parentElement.style.transform = `rotate(${milliPosition}deg)`;
}
