const playButton = document.getElementById('play-pause');
const progressBar = document.querySelector('.fill');
let isPlaying = false;

// Simulate some song duration (adjust as needed)
const songDuration = 300; // In seconds

playButton.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  isPlaying = true;
  playButton.textContent = '❚❚'; // Change icon to pause symbol

  // Simulate progress bar filling up over song duration
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= songDuration) {
      clearInterval(interval);
      progress = songDuration;
    }
    progressBar.style.width = `${(progress / songDuration) * 100}%`;
    progress++;
  }, 1000); // Update progress bar every second
}

function pauseSong() {
  isPlaying = false;
  playButton.textContent = '▶'; // Change icon to play symbol
  // Pause any simulated progress bar update here
}
