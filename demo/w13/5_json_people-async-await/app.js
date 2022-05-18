'use strict';

const textEl = document.createElement('p');

const btn = document.querySelector('.btn');
const div = document.querySelector('.div');
const url = 'api/people.json';

const getDataAsync = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
  } catch (err) {
    console.log(err);
  }
};

const showData = data => {
  btn.addEventListener('click', () => {
    data.forEach(el =>
      div.insertAdjacentHTML('beforebegin', `<p>${el.name}</p>`)
    );

    console.log(data);
  });
};
getDataAsync(url);
