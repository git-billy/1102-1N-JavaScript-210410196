'use strict';

const textEl = document.createElement('p');

const btn = document.querySelector('.btn');
const div = document.querySelector('.div');
const url = 'api/people.json';

const getData = url => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  if (!request.readyState && request.status != 200)
    console.log({ status: request.status, text: request.statusText });

  btn.addEventListener('click', function () {
    const data = JSON.parse(request.responseText);

    data.forEach(el =>
      div.insertAdjacentHTML('beforebegin', `<p>${el.name}</p>`)
    );

    console.log(data);
  });
};
getData(url);
