/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullButton = player.querySelector('.full__button');
const ranges = player.querySelectorAll('.player__slider');

// console.log(progressBar);

/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause' ;
    video[method]();
}

function updateButton() {
    // console.log('Update the button');
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function fullScreen() {
    // console.log('going full screen');
    fullNow = !fullNow;
    // console.log(fullNow);
    document.querySelector('body').classList.toggle('body_black');
    player.classList.toggle('full__screen');
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(ev) {
    const scrubTime = (ev.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(ev);
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

document.addEventListener('keyup', (ev) => ev.keyCode == 32 && togglePlay());
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

let fullNow = false;
fullButton.addEventListener('click', fullScreen);
document.addEventListener('keyup', (ev) => ev.keyCode == 27 && fullNow && fullScreen());
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (ev) => mouseDown && scrub(ev));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);