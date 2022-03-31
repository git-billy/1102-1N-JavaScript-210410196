'use strict';

// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log('value', value.textContent);
console.log('btns', btns);

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      //   console.log(Boolean(styles.contains('decrease'), count));
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
        value.style.color = '#222';
    }
    value.textContent = count;
    console.log('value', value.textContent, value.style.color);
  });
});
