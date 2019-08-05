const timerDisplay = document.querySelector(".display__time-left");
const endDisplay = document.querySelector(".display__end-time");
const timerButtons = document.querySelectorAll("[data-time]");
const timerForm = document.customForm;

let countdown;

timerButtons.forEach(timerButton => timerButton.addEventListener("click", startTimer));
timerForm.addEventListener("submit", e => {
  e.preventDefault();
  timer(timerForm.minutes.value * 60);
  timerForm.reset();
});

function timer(seconds) {
  const now = Date.now();
  const later = now + seconds * 1000;
  displayRemainingTime(seconds);
  displayEndTime(later);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((later - Date.now()) / 1000);
    if (secondsLeft <= 0) clearInterval(countdown);
    displayRemainingTime(secondsLeft);
  }, 1000);
}

function displayRemainingTime(seconds) {
  const { h: totalHours, m: totalMinutes, s: totalSeconds } = {
    h: Math.floor(seconds / 3600),
    m: Math.floor((seconds % 3600) / 60),
    s: seconds % 60
  };
  const display = `${totalHours}:${totalMinutes < 10 ? "0" : ""}${totalMinutes}:${
    totalSeconds < 10 ? "0" : ""
  }${totalSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  endDisplay.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  clearInterval(countdown);
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
