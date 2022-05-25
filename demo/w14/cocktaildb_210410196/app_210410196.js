import presentDrinks from './src/presentDrinks_xx.js';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h';

window.addEventListener('DOMContentLoaded', () => presentDrinks(URL));
