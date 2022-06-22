import get from './getElement.js';
import {searchItems} from '../api/search/config_99.js';

import presentDrinks from './presentMeals_99.js'

const form = get('.search-form');

// const input = get('[name="drink"]');
const input = get('[name="meal"]');

// console.log('form', form);
// console.log('input', input);

// console.log('config_xx.js', { LOCAL_URL, hasNetwork, searchItems });

const baseURL = 'api/search/';

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  console.log('input', input.value);
  const value = input.value;
  if (!value) return;
  if (false) {
    presentDrinks(`${baseURL}${value}`);
  } else {
    if (searchItems.find((item) => item === value)) {
      presentDrinks(`${baseURL}${value}.json`);
    }
  }
});
