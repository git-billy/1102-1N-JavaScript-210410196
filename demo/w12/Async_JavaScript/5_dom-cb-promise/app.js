'use strict';

const btn = document.querySelector('.btn');
const helloworldRed = document.querySelector('.one');
const helloworldGreen = document.querySelector('.two');
const helloworldBlue = document.querySelector('.threee');

const changeColor = function (attribute, color, time) {
  return new Promise(function (resolve, reject) {
    if (attribute) {
      setTimeout(() => {
        attribute.style.color = `${color}`;
        resolve();
      }, time * 1000);
    } else {
      reject(new Error(`There is no such attirbut ${attribute}`));
    }
  });
};

btn.addEventListener('click', function () {
  changeColor(helloworldRed, 'red', 1)
    .then(() => {
      changeColor(helloworldGreen, 'green', 2);
    })
    .then(() => {
      changeColor(helloworldBlue, 'blue', 1);
    })
    .catch(err => console.log(err));
});
