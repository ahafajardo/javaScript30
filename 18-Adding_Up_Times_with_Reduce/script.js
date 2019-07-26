const videos = [...document.querySelectorAll("[data-time]")];

const { hours: totalHours, minutes: totalMinutes, seconds: totalSeconds } = {
  hours: Math.floor(videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[0]) + total, 0) / 60),
  minutes:
    (videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[0]) + total, 0) % 60) +
    Math.floor(videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[1]) + total, 0) / 60),
  seconds: videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[1]) + total, 0) % 60
};
console.log(totalHours, totalMinutes, totalSeconds);
