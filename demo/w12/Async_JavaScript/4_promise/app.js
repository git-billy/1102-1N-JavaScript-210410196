'use strict';

const btn = document.querySelector('.btn');
const helloworldRed = document.querySelector('.one');
const helloworldGreen = document.querySelector('.two');
const helloworldBlue = document.querySelector('.three');

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve({ id: 1, name: 'john' });
  } else {
    reject('there is an error');
  }
});

console.log(promise);

promise
  .then(data => {
    console.log('data', data);
  })
  .catch(err => console.log('error', err));
