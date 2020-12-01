function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

//random generator
/*randomSound();
sounds = ['boom', 'clap', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom'];

function randomSound() {
  window.addEventListener('keydown', (e)=> {
    playSound(getRndInteger(0,sounds.length))
  });
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

function playSound(i) {
  sound = document.createElement('audio');
  sound.src = `sounds/${sounds[i]}.wav`;
  sound.setAttribute('preload', 'auto');
  sound.setAttribute('controls', 'none');
  sound.style.display = 'none';
  document.body.appendChild(sound);
  sound.play();
};*/
