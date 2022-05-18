'use strict';

const textEl = document.createElement('p');

const btn = document.querySelector('.btn');
const main = document.querySelector('#main');
const url = 'api/dataset.json';

const dataArray = [];

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

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
  let allData = data
    .map(
      el =>
        `<div class="person"><strong>${el.name}</strong> ${formatMoney(
          el.money
        )}</div>`
    )
    .join('');

  btn.addEventListener('click', () => {
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${allData}`;
  });

  console.log(dataArray);
};
getDataAsync(url);
