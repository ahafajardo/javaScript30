const speedControl = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector("video");
const min = 0.4;
const max = 4;

speedControl.addEventListener("mousemove", e => {
  const y = e.pageY - speedControl.offsetTop;
  const percent = y / speedControl.offsetHeight;
  const height = `${Math.round(percent * 100)}%`;
  const rate = min + percent * (max - min);
  speedBar.style.height = height;
  speedBar.textContent = `${rate.toFixed(2)}×`;
  video.playbackRate = rate;
});
