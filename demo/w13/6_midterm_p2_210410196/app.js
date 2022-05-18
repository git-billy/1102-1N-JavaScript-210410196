'use strict';

const textEl = document.createElement('p');

const btn = document.querySelector('.btn');
const main = document.querySelector('#main');
const url = 'api/dataset.json';

const dataArray = [];

const getDataAsync = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.map(el => dataArray.push(el));
    showData(data);
  } catch (err) {
    console.log(err);
  }
};

const showData = data => {
  btn.addEventListener('click', () => {
    data.map(el =>
      main.insertAdjacentHTML(
        'afterend',
        `
        <div class="person"><strong>${el.name}</strong> $${el.money}</div>
        `
      )
    );
  });
};
getDataAsync(url);
