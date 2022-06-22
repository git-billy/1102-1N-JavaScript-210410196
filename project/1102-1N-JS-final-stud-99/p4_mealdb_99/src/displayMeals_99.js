import get from './getElement.js';

const displayDrinks = async ( drinks ) => {
    console.log('drinks', drinks);
    const title = get('.title');
    const section = get('.section-center');
    // console.log('title', title);
    // console.log('section', section);
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
    
    title.textContent = '';
    section.innerHTML = newDrinks;


    if (!drinks) {
      hideLoading();
      title.textContent = 'Sorry, no drinks matched your search';
      section.innerHTML = null;
      return;
    }
}

export default displayDrinks;