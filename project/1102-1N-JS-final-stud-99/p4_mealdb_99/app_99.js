import './src/searchForm_99.js';
import get from './src/getElement.js';
// import presentDrinks from './src/presentMeals_99.js'

import { LOCAL_URL, hasNetwork, searchItems } from './api/search/config_99.js';

// console.log('config_xx.js', { LOCAL_URL, hasNetwork, searchItems });

const URL = 'api/search/cheese.json';

const showLoading = () => {
  const loading = get('.loading');
  loading.classList.remove('hide-loading');
};

const hideLoading = () => {
  const loading = get('.loading');
  loading.classList.add('hide-loading');
};

// const setDrink = (section) => {
//   section.addEventListener('click', (e) => {
//     // e.preventDefault();
//     console.log('data-id', e.target.parentElement.dataset.id);
//     const id = e.target.parentElement.dataset.id;
//     localStorage.setItem('drink', id);
//   });
// };

const displayDrinks = async ( drinks ) => {
  console.log('drinks', drinks);
  const title = get('.title');
  const section = get('.section-center');
  // console.log('title', title);
  // console.log('section', section);
  if (!drinks) {
    hideLoading();
    title.textContent = 'Sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }

  const convertDrinks = drinks.meals;

  const newDrinks = convertDrinks.map((drink) => {
      const { idDrink: id, strMeal: name, strMealThumb: image } = drink;
      return `
    <a href="drink_xx.html">
    <article class="cocktail" data-id="1">
      <img src="${image}" alt="cocktail" />
      <h3>${name}</h3>
    </article>
  </a>
    `;
    })
    .join('');
  //   console.log('newDrinks', newDrinks);
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

const fetchDrinks = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const presentDrinks = async (url) => {
  // fetch drinks
  console.log('fetch url', url);
  const data = await fetchDrinks(url);
  console.log('drinks data', data);
  const section = await displayDrinks(data);
  if (section) {
    // setDrink(section);
    displayDrinks(section)
  }
};

window.addEventListener('DOMContentLoaded', () => {
  if (hasNetwork) {
    presentDrinks(URL);
  } else {
    presentDrinks(URL);
  }
});
