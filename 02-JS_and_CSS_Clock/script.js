let currentTime = new Date();
let secondPosition = 90;
let minPosition = 90;
let hourPosition = 90;
let milliPosition = 90;

setInterval(update, 10);

function update() {
  currentTime = new Date();
  secondPosition = currentTime.getSeconds() * 6 + 90;
  minPosition = currentTime.getMinutes() * 6 + 90;
  hourPosition = currentTime.getHours() * 30 + 90;
  milliPosition = currentTime.getMilliseconds() * 0.36 - 270;
  //account for position of milli-hand at 1000 ms. 1000 * 0.36 + 90 = 420, so subtract 270 instead. Range is then -270 to 90 degrees

  document.querySelector("div.hand div.second-hand").parentElement.style.transform = `rotate(${secondPosition}deg)`;
  document.querySelector("div.hand div.min-hand").parentElement.style.transform = `rotate(${minPosition}deg)`;
  document.querySelector("div.hand div.hour-hand").parentElement.style.transform = `rotate(${hourPosition}deg)`;
  document.querySelector("div.hand div.milli-hand").parentElement.style.transform = `rotate(${milliPosition}deg)`;
}
