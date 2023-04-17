let video = document.querySelector(".video");
const videoSrc = localStorage.getItem('videoSrc');
const poster = localStorage.getItem('poster');


if (videoSrc && poster) {
    video.innerHTML = videoSrc;
    video.poster = './assets/images/' + poster;
}

video.load();

document.querySelector(".rewaindForward").onclick = function () {
    video.currentTime += 5;
};

document.querySelector(".rewaindBack").onclick = function () {
    video.currentTime -= 5;
};

document.querySelector(".stopButton").onclick = function () {
    video.pause();
    video.currentTime = 0;
    document.querySelector(".playButton").classList.remove('fa-pause');
    document.querySelector(".playButton").classList.add('fa-play');
};

document.querySelector(".playButton").onclick = function (e) {
    if (video.paused) {
        video.play();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
    } else {
        video.pause();
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
    }
};

document.querySelector(".volumeDownButton").onclick = function () {
    if (video.volume >= 0.1) video.volume -= 0.1;
}

document.querySelector(".volumeUpButton").onclick = function () {
    if (video.volume <= 0.9) video.volume += 0.1;
}

document.querySelector(".fullScreenButton").onclick = function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
};

const trackBtns = document.querySelectorAll('.videoTrack');

trackBtns.forEach(trackBtn => {
    trackBtn.addEventListener('click', function () {
        const videoSrc = `
            <source src="./assets/video/${this.dataset.src}.mp4"/>
            <source src="./assets/video/${this.dataset.src}.webm"/>
            <source src="./assets/video/${this.dataset.src}.ogg"/>`;
        video.innerHTML = videoSrc;
        localStorage.setItem('videoSrc', videoSrc);
        localStorage.setItem('poster', this.dataset.poster);
        video.load();
        video.play();
    });
})

