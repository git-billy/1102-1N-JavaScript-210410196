const setDrink = section => {
  section.addEventListener('click', e => {
    // e.preventDefault();
    console.log('data-id', e.target.parentElement.dataset.id);
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
