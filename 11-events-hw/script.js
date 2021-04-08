// play sound when pressed key on keyboard
window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`button[data-key="${e.code}"]`);

  if (!audio) return;
  audio.currentTime = 0.2;
  audio.play();

  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 1500);
});

// additional interaction. play sound when click key by mouse
window.addEventListener('click', function (e) {
  const key = e.target.closest('button');

  if (!key) return;

  const dataKey = key.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

  if (!audio) return;
  audio.currentTime = 0.2;
  audio.play();

  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 1500);
})


