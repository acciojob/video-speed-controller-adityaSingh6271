const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


   const video = document.querySelector('.flex');
const progress = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeRange = document.querySelector('[name="volume"]');
const playbackSpeed = document.querySelector('[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const backwardButton = document.querySelector('.backward');
const forwardButton = document.querySelector('.forward');

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function backward() {
  video.currentTime -= 10;
}

function forward() {
  video.currentTime += 25;
}

video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgressBar);
volumeRange.addEventListener('change', handleRangeUpdate);
volumeRange.addEventListener('mousemove', handleRangeUpdate);
playbackSpeed.addEventListener('change', handleRangeUpdate);
playbackSpeed.addEventListener('mousemove', handleRangeUpdate);
skipButtons.forEach(button => button.addEventListener('click', skip));
backwardButton.addEventListener('click', backward);
forwardButton.addEventListener('click', forward);