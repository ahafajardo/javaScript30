const videos = [...document.querySelectorAll("[data-time]")];

const { hours: totalHours, minutes: totalMinutes, seconds: totalSeconds } = {
  hours: Math.floor(videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[0]) + total, 0) / 60),
  minutes:
    (videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[0]) + total, 0) % 60) +
    Math.floor(videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[1]) + total, 0) / 60),
  seconds: videos.reduce((total, video) => parseInt(video.dataset.time.split(":")[1]) + total, 0) % 60
};

/*
    This is VERY dense, so let's break it down:

    Use destructuring to assign three constant variables to their corresponding properties in a new object.
    
    hours:
    Read the minutes part in the string from each video. That comes before ":".
    Then, divide the total minutes by 60 to find the remaining hours. This will likely have some decimal digits at the end, 
    so let's drop those with Math.floor().

    minutes:
    Read the minutes part in the string from each video. 
    Then, divide the total minutes by 60 and find the remainder. That's what the "modulus operator" (%) does.
    This gives us the leftover minutes that we dropped in the hours property.
    Next, read the seconds part in the string from each video. That comes after ":".
    Then, divide the total seconds by 60 to find the remaining minutes. This will likely have some decimal digits at the end, 
    so let's drop those with Math.floor().

    seconds:
    Read the seconds part in the string from each video.
    Then, divide the total seconds by 60 and find the remainder.
    This gives us the leftover seconds that we dropped in the minutes property.
*/

console.log(totalHours, totalMinutes, totalSeconds);
