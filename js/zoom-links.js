const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const fontSizeValue = document.getElementById('font-size-value');
const tabLinks = document.querySelectorAll('.tab__links-item');

let fontSize = 100;

decreaseBtn.addEventListener('click', function() {
  if (fontSize > 70) {
    fontSize -= 10;
    fontSizeValue.textContent = fontSize + '%';
    localStorage.setItem('font-size', fontSize);
    tabLinks.forEach(link => {
      link.style.fontSize = `${fontSize}%`;
    });
  }
});

increaseBtn.addEventListener('click', function() {
  if (fontSize < 150) {
    fontSize += 10;
    fontSizeValue.textContent = fontSize + '%';
    localStorage.setItem('font-size', fontSize);
    tabLinks.forEach(link => {
      link.style.fontSize = `${fontSize}%`;
    });
  }
});

const savedFontSize = localStorage.getItem('font-size');
if (savedFontSize) {
  fontSize = parseInt(savedFontSize);
  fontSizeValue.textContent = fontSize + '%';
  tabLinks.forEach(link => {
    link.style.fontSize = `${fontSize}%`;
  });
}