import fetchDrinks from './fetchMeals_99.js'
import displayDrinks from './displayMeals_99.js'

export const presentDrinks = async (url) => {
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

  export default presentDrinks;