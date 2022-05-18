'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'api/sample.txt');

request.onreadystatechange = () => {
  
  const textEl = document.createElement('p');

  if (!request.readyState && request.status != 200)
    console.log({ status: request.status, text: request.statusText });

  textEl.textContent = request.responseText;
  document.body.appendChild(textEl);
};

request.send();
console.log(request);
