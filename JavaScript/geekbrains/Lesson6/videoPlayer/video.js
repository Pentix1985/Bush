'use strict';

const video = document.querySelector('video');
const player = document.querySelector('.player');
const timing = document.querySelector('.timing');
const volume = document.querySelector('.volume')
const currentTime = document.querySelector('.currentTime');
const playButton = document.querySelector('.fa-play');
const pauseButton = document.querySelector('.fa-pause');

let wasVideoPlaying = false;
let progressIntervalId = null;

window.addEventListener('load', () => {
    timing.setAttribute('min', 0);
    timing.setAttribute('max', video.duration);
});

window.addEventListener('keydown', (event) => {
    if (event.code === "Space" && !video.paused) {
        video.pause();
    } else if (event.code === "Space" && video.paused) {
        video.play();
    }
});

playButton.addEventListener('click', (event) => {
    if(video.paused) {
        video.play();
        progressIntervalId = setInterval(() => {
            changeTimeValue();
        }, 100);
    }
});

pauseButton.addEventListener('click', (event) => {
    if(!video.paused) {
        video.pause();
        clearInterval(progressIntervalId);
    }   
});

timing.addEventListener('mousedown', (event) => {
    wasVideoPlaying = !video.paused;
    if(wasVideoPlaying) {
        video.pause();
        clearInterval(progressIntervalId);
    }
});

timing.addEventListener('change', () => {
    video.currentTime = timing.value;
    if(wasVideoPlaying) {
        video.play();
        progressIntervalId = setInterval(() => {
            changeTimeValue();
        }, 100);
    } else {
        changeTimeValue();
    }
});

/**
 * Функция передает время видео в переменную currentTime
 */
function changeTimeValue() {
    timing.value = video.currentTime;
    currentTime.innerText = video.currentTime;
}

video.addEventListener('ended', () => {
    clearInterval(progressIntervalId);
});

volume.addEventListener('change', () => {
    video.volume = volume.value;
});
