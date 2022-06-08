import { hideLoading } from './toggleLoading_xx.js';
import get from './getElement.js';

const displaySingleDrink = async ({ drinks }) => {
  console.log('display drink', drinks[0]);
  hideLoading();
  const drink = drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  const img = get('.drink-img');
  img.src = image;
  const drinkName = get('.drink-name');
  drinkName.textContent = name;
  const description = get('.drink-desc');
  description.textContent = desc;
  const ingredients = get('.drink-ingredients');
  ingredients.innerHTML = list
    .map(item => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
};

export default displaySingleDrink;
