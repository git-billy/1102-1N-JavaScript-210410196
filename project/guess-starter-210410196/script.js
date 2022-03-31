'use strict';

const bingo = document.querySelector('body');
const message = document.querySelector('.message');

const showNumber = document.querySelector('.number');
const againbutton = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');

const scoreValue = document.querySelector('.score');
const highscoreValue = document.querySelector('.highscore');

const randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

window.addEventListener('DOMContentLoaded', function () {
//   displayNumber();
  checkResult();
  againing();
});

const displayNumber = () => {
  showNumber.textContent = randomNumber;
};

const showMessage = msg => {
  message.textContent = msg;
};

const checkResult = () => {
  document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(guessNumber.value);
    
    // console.log("typeof guess: ", typeof guess);

    // 0 = false, 1 = true
    // console.log("Boolean: ", Boolean(guess));

    if (!guess) {
      // console.log("!guess: ", !guess);
      showMessage('No input number');
    } else if (guess === randomNumber) {
      // console.log(typeof (guess === secretNumber));
      showMessage(`Bingo ${'👻'.repeat(5)}`);
      bingo.style.backgroundColor = '#60b347';
      showNumber.style.width = '30rem';

      highscore = score;
      highscoreValue.textContent = highscore;

    } else if (guess !== randomNumber) {
      if (score > 1) {
        score--;
        // console.log("debug", score);
        scoreValue.textContent = score;
        showMessage(guess > randomNumber ? 'number too high' : 'number too low');
      } else if (score >= 1) {
        scoreValue.textContent = 0;
        showMessage('you lose this game');
      }
    }
  });
};

const againing = () => {
  againbutton.addEventListener('click', () => {
    score = 20;

    showMessage('Start guessing...');
    scoreValue.textContent = score;
    guessNumber.value = '';
    showNumber.textContent = '?';
    bingo.style.backgroundColor = '#222';
    highscoreValue.textContent = 0;
  });
};
