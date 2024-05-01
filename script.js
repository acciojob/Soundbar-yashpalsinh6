const audioPlayer = document.getElementById('audioPlayer');

function playSound(soundFile) {
  audioPlayer.src = `sounds/${soundFile}`;
  audioPlayer.play();
}

function stopSound() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}