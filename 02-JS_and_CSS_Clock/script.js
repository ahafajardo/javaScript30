let currentTime = new Date();
let secondPosition = 0;
let minPosition = 0;
let hourPosition = 0;

setInterval(update, 1000);

function update() {
  currentTime = new Date();
  secondPosition = currentTime.getSeconds() * 6 + 90;
  minPosition = currentTime.getMinutes() * 6 + 90;
  hourPosition = currentTime.getHours() * 30 + 90;

  document.querySelector("div.hand div.second-hand").parentElement.style.transform = `rotate(${secondPosition}deg)`;
  document.querySelector("div.hand div.min-hand").parentElement.style.transform = `rotate(${minPosition}deg)`;
  document.querySelector("div.hand div.hour-hand").parentElement.style.transform = `rotate(${hourPosition}deg)`;
}
