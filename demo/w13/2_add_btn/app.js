'use strict';

const textEl = document.createElement('p');

const request = new XMLHttpRequest();
request.open('GET', 'api/sample.txt');

const getData = () => {
  request.onreadystatechange = () => {
    if (!request.readyState && request.status != 200)
      console.log({ status: request.status, text: request.statusText });

    textEl.textContent = request.responseText;
    document.body.appendChild(textEl);
  };
  request.send();
};

document.querySelector('.btn').addEventListener('click', () => {
  getData();
});
