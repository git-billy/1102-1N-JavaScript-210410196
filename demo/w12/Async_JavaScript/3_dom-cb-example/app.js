'use strict';

const btn = document.querySelector('.btn');
const helloworldRed = document.querySelector('.one');
const helloworldGreen = document.querySelector('.two');
const helloworldBlue = document.querySelector('.three');

btn.addEventListener('click', function () {
  setTimeout(() => {
    helloworldRed.style.color = 'red';
  }, 1000);
  setTimeout(() => {
    helloworldGreen.style.color = 'green';
  }, 2000);
  setTimeout(() => {
    helloworldBlue.style.color = 'blue';
  }, 1000);
});
