const audioElement = document.getElementById("backgroundMusic");

function playMusicOnce() {
  if (audioElement.paused) {
    audioElement.play();
  }
}

document.body.addEventListener("click", playMusicOnce);
