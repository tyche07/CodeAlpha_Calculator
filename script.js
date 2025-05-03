const display = document.getElementById('display');

// Append 
function appendToDisplay(value) {
  display.value += value;
}

// Clear
function clearDisplay() {
  display.value = '';
}

// evaluation
function calculate() {
  try {
    const result = Function(`'use strict'; return (${display.value})`)();
    display.value = result;
  } catch (err) {
    display.value = 'Error';
  }
}

// Keyboard 
document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.%';
  if (validKeys.includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
