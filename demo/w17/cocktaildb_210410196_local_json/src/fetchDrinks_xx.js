const fetchDrinks = async url => {
  try {
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchDrinks;
