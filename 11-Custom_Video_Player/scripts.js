// Get Our Elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const playerControls = player.querySelector(".player__controls");
const progressBar = playerControls.querySelector(".progress");
const progressBarFill = progressBar.firstElementChild;
const playButton = playerControls.querySelector(".toggle");
const volumeSlider = playerControls.querySelector("[name='volume']");
const speedSlider = playerControls.querySelector("[name='playbackRate']");
const skipButtons = playerControls.querySelectorAll("[data-skip]");

// Set some Variables
let scrub = false;

// Hook Up Event Listeners
video.addEventListener("click", handlePlayPause);
playButton.addEventListener("click", handlePlayPause);
video.addEventListener("timeupdate", handleVideoProgress);
progressBar.addEventListener("click", handleProgressBarClick);
progressBar.addEventListener("mousedown", handleProgressBarMouseDown);
player.addEventListener("mouseup", handlePlayerMouseAway);
player.addEventListener("mouseleave", handlePlayerMouseAway);
player.addEventListener("mousemove", handleScrub);

// Build our Functions
function handlePlayPause() {
  if (!video.paused) {
    video.pause();
    playButton.textContent = "❚ ❚";
  } else {
    video.play();
    playButton.textContent = "►";
  }
}

function handleVideoProgress() {
  progressBarFill.style.setProperty("flex-basis", `${(video.currentTime / video.duration) * 100}%`);
}

function handleProgressBarClick(e) {
  if (!video.paused) video.pause();
  video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}

function handleProgressBarMouseDown() {
  if (!video.paused) video.pause();
  scrub = true;
}

function handlePlayerMouseAway() {
  scrub = false;
}

function handleScrub(e) {
  if (scrub) video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}
