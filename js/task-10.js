function createBoxes(amount) {
  const container = document.getElementById('boxes');
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    container.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const container = document.getElementById('boxes');
  container.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = input.value;
  createBoxes(amount);
});

const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
