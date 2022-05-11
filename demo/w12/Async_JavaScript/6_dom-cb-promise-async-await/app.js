'use strict';

const btn = document.querySelector('.btn');

const helloworldRed = document.querySelector('.one');
const helloworldGreen = document.querySelector('.two');
const helloworldBlue = document.querySelector('.thre');

btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

const displayColor = async () => {
  try {
    await changeColor(helloworldRed, 'red', 1);
    await changeColor(helloworldGreen, 'green', 2);
    await changeColor(helloworldBlue, 'blue', 1);
  } catch (err) {
    console.log(err);
  }
};

const changeColor = (attribute, color, time) => {
  return new Promise(function (resolve, reject) {
    if (attribute) {
      setTimeout(() => {
        attribute.style.color = color;
        resolve();
      }, time * 1000);
    } else {
      reject(new Error(`There is no such attirbut ${attribute}`));
    }
  });
};
