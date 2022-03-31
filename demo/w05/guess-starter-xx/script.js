'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const showNumber = document.querySelector('.number');
showNumber.textContent = secretNumber;
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

console.log('secretNumber', secretNumber);

const displayMessage = msg => {
  message.textContent = msg;
};

let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
//   console.log('guess typeof:', guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Guess too high' : 'Guess too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  showNumber.textContent = '?';
  document.querySelector('.guess').style.backgroundColor = '#222'
  document.querySelector('.highscore').textContent = 19;
});
