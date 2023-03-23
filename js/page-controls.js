const draggable = document.querySelector('#draggable');
const storageKey = 'draggedDivPosition';

// Set the initial position of the draggable div
let xPos = localStorage.getItem(storageKey + '_x');
let yPos = localStorage.getItem(storageKey + '_y');
if (xPos && yPos) {
  draggable.style.left = xPos + 'px';
  draggable.style.top = yPos + 'px';
}

draggable.addEventListener('dragstart', (event) => {
  // Save the current position of the draggable div when drag starts
  const rect = draggable.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  localStorage.setItem(storageKey + '_x', x);
  localStorage.setItem(storageKey + '_y', y);
});

document.addEventListener('dragover', (event) => {
  // Allow the dragged div to be dropped anywhere on the page
  event.preventDefault();
});

document.addEventListener('drop', (event) => {
  // Move the draggable div to the dropped position and save it in local storage
  event.preventDefault();
  const xPos = event.clientX - draggable.offsetWidth / 10;
  const yPos = event.clientY - draggable.offsetHeight / 10;
  localStorage.setItem(storageKey + '_x', xPos);
  localStorage.setItem(storageKey + '_y', yPos);
  draggable.style.left = xPos + 'px';
  draggable.style.top = yPos + 'px';
});

// Listen for the "beforeunload" event to clear the local storage of the draggable element
window.addEventListener('beforeunload', () => {
  localStorage.removeItem(storageKey + '_x');
  localStorage.removeItem(storageKey + '_y');
});