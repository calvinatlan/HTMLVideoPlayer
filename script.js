document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

let video;
let controls;
let firstPlay = true;
let timeoutId;

initialiseMediaPlayer = function() {
    video = document.querySelector('#media');
    video.currentTime = 10;
    controls = document.querySelector('.video-controls img');
    video.controls = false;
    video.addEventListener('mousemove', showControls);
};

toggle = function() {
    if(video) {
        if(video.paused) {
            play();
        } else {
            pause();
        }
    }
};

play = function() {
    video.play();
    if(firstPlay) {
        video.currentTime = 0;
        firstPlay = false;
    }
    controls.src = "./controls/pause.svg";
    showControls();
};

pause = function() {
    video.pause();
    controls.src = "./controls/play.svg";
    showControls();
};

replay = function() {
    video.currentTime = 0;
    video.play();
    showControls();
};

startFade = function() {
    timeoutId = setTimeout(() => {
        console.log(controls);
        controls.parentElement.classList.remove("active");
    },1000);
};

showControls = function() {
    clearTimeout(timeoutId);
    controls.parentElement.classList.add("active");
    if(video && !video.paused) {
        startFade();
    }
};
