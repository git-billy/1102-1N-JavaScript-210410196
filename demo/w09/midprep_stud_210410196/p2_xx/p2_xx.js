const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');
const currentCalculation = document.querySelector('#current-calculation');

const getUserInput = () => {
  return parseFloat(userInput.value).toFixed(2);
};

const c2f = () => {
  const enteredInput = getUserInput().toFixed(2);
  result = ((enteredInput * 9) / 5 + 32).toFixed(2);
  currentCalculation.textContent = `${enteredInput} C = ${result} F`;
};

const f2c = () => {
  const enteredInput = getUserInput().toFixed(2);
  result = (((enteredInput - 32) * 5) / 9).toFixed(2);
  currentCalculation.textContent = `${enteredInput} C = ${result} F`;
};

cBtn.addEventListener('click', c2f);
fBtn.addEventListener('click', f2c);
