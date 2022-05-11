'use strict';

const url = 'api/people.json';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(() => console.log(new Error('url error')));
