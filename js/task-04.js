// Get references to the DOM elements
const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// Initialize the counter value
let counterValue = 0;
valueSpan.textContent = counterValue;

// Add click event listeners to the buttons
decrementBtn.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});
