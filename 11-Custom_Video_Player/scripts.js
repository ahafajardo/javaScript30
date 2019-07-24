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
const fullscreenButton = player.querySelector(".full__screen");

// Set some Variables
let scrub = false;
let mouseHideTimer;
let mouseHide = false;

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

fullscreenButton.addEventListener("click", handleFullscreen);

player.addEventListener("mousemove", handleMouseHide);
player.addEventListener("click", handleMouseHide);

// Build our Functions
function handlePlayPause() {
  if (!video.paused) {
    video.pause();
    playButton.innerHTML = `<i class="fas fa-play"></i>`;
  } else {
    video.play();
    playButton.innerHTML = `<i class="fas fa-pause"></i>`;
  }
}

function handleFullscreen() {
  if (
    !document.isFullScreen &&
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.mozFullScreenElement &&
    !document.msFullscreenElement
  ) {
    player.requestFullscreen();
    fullscreenButton.innerHTML = `<i class="fas fa-compress"></i>`;
  } else {
    document.exitFullscreen();
    fullscreenButton.innerHTML = `<i class="fas fa-expand"></i>`;
  }
}

function handleVideoProgress() {
  progressBarFill.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

function handleProgressBarMouseDown(e) {
  if (!video.paused) video.pause();
  scrub = true;
  video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  playButton.innerHTML = `<i class="fas fa-play"></i>`;
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
  let skipInterval = parseFloat(e.target.dataset.skip);
  if (checkSkip(skipInterval)) video.currentTime += skipInterval;
  else video.currentTime = skipInterval > 0 ? video.duration : 0;
}

function checkSkip(interval) {
  if (interval > 0) return video.currentTime <= video.duration - interval;
  else return video.currentTime + interval >= 0;
}

function handleMouseHide() {
  if (!mouseHide) {
    player.style.cursor = "";
    playerControls.classList.add("player__active");
    clearTimeout(mouseHideTimer);
    if (!playerControls.matches(":hover"))
      mouseHideTimer = setTimeout(() => {
        player.style.cursor = "none";
        playerControls.classList.remove("player__active");
        mouseHide = true;
        setTimeout(() => {
          mouseHide = false;
        }, 200);
      }, 1000);
  }
}
