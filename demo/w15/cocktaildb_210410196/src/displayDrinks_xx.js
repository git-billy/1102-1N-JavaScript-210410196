import get from './getElement.js';
import { showLoading, hideLoading } from './toggleLoading_xx.js';

const displayDrinks = async drinks => {
  console.log('drinks', drinks);
  const title = get('.title');
  const section = get('.section-center');

  const desDrinks = drinks.drinks;

  if (!desDrinks) {
    hideLoading();
    title.textContent = 'Sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }

  hideLoading();
  const html = desDrinks
    .map(
      e =>
        `
  <a href="drink_210410196.html">
    <article class="cocktail" data-id="${e.isDrinks}">
        <img src="${e.strDrinkThumb}" alt="cocktail" />
        <h3>${e.strDrink}</h3>
    </article>
  </a>
  `
    )
    .join('');

  title.textContent = '';
  section.innerHTML = html;
};

export default displayDrinks;
