import fetchDrinks from './fetchDrinks_xx.js';
import displayDrinks from './displayDrinks_xx.js';
import setDrink from './setDrink_xx.js';

const presentDrinks = async url => {
  // fetch drinks
  const data = await fetchDrinks(url);
  console.log('drinks data', data);
  
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default presentDrinks;
