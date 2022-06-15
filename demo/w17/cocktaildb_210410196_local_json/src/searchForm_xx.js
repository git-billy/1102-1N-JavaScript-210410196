import { hasNetwork, LOCAL_URL, searchItesm } from '../api/search/config_xx.js';
import get from './getElement.js';
import presentDrinks from './presentDrinks_xx.js';

const form = get('.search-form');
const input = get('[name="drink"]');

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup', e => {
  e.preventDefault();
  console.log('input', input.value);
  const value = input.value;
  if (!value) return;

  if (hasNetwork) {
    presentDrinks(`${baseURL}${value}`);
  } else {
    if (searchItesm.find(item => item === value)) {
      presentDrinks(`${LOCAL_URL}${value}.json`);
    }
  }
});
