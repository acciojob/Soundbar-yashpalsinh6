//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

const sounds = {
  applause: new Audio('sounds/applause.mp3'),
  boo: new Audio('sounds/boo.mp3'),
  gasp: new Audio('sounds/gasp.mp3'),
  tada: new Audio('sounds/tada.mp3'),
  victory: new Audio('sounds/victory.mp3'),
  wrong: new Audio('sounds/wrong.mp3')
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sound = sounds[button.innerText];
    sound.play();
  });
});

stopButton.addEventListener('click', () => {
  for (let sound in sounds) {
    sounds[sound].pause();
    sounds[sound].currentTime = 0;
  }
});
