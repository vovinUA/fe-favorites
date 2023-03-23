const animTogglerBtn = document.querySelector('#animation-toggler');
const bodyEl = document.querySelector('body');

animTogglerBtn.addEventListener('click', () => {
  if (bodyEl.classList.contains('reduce-motion')) {
    bodyEl.classList.remove('reduce-motion');
  } else {
    bodyEl.classList.add('reduce-motion');
  }
});