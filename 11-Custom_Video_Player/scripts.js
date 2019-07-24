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
progressBar.addEventListener("mousedown", handleProgressBarMouseDown);
player.addEventListener("mouseup", handleStopScrub);
player.addEventListener("mouseleave", handleStopScrub);
player.addEventListener("mousemove", handleScrub);
volumeSlider.addEventListener("click", handleVolumeSliderMove);
volumeSlider.addEventListener("mousemove", handleVolumeSliderMove);
speedSlider.addEventListener("click", handleSpeedSliderMove);
speedSlider.addEventListener("mousemove", handleSpeedSliderMove);
skipButtons.forEach(skipButton => skipButton.addEventListener("click", handleSkip));

// Build our Functions
function handlePlayPause() {
  if (!video.paused) {
    video.pause();
    playButton.textContent = "►";
  } else {
    video.play();
    playButton.textContent = "❚ ❚";
  }
}

function handleVideoProgress() {
  progressBarFill.style.setProperty("flex-basis", `${(video.currentTime / video.duration) * 100}%`);
}

function handleProgressBarMouseDown() {
  if (!video.paused) video.pause();
  scrub = true;
  playButton.textContent = "►";
}

function handleStopScrub() {
  scrub = false;
}

function handleScrub(e) {
  if (scrub) {
    video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    progressBarFill.style.setProperty("flex-basis", `${(video.currentTime / video.duration) * 100}%`);
  }
}

function handleVolumeSliderMove() {
  video.volume = volumeSlider.value;
}

function handleSpeedSliderMove() {
  video.playbackRate = speedSlider.value;
}

function handleSkip(e) {
  video.currentTime += parseInt(e.target.dataset.skip);
}
