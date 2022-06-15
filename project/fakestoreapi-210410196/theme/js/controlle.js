import * as model from './model.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import usersView from './views/usersView.js';

const controlAllResults = async function () {
  try {
    const page = window.location.href;
    const getHref = page.includes('#products');
    if (!getHref) return;

    resultsView.renderSpinner();
    const data = await model.loadAllResults();
    resultsView.render(data);
  } catch (err) {
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get search query
    const query = searchView.getQuery();
    const convertQuery = searchView.convertQuery(query);

    // Load search user results
    if (query.includes('@')) {
      const data = await model.loadSearchUserResults(convertQuery);
      usersView.render(data);
    }

    // Load search product results
    const data = await model.loadSearchProductResults(convertQuery);
    resultsView.render(data);
  } catch (err) {
    console.error(err);
  }
};

const controlAllUsers = async function () {
  try {
    const page = window.location.href;
    const getHref = page.includes('#users');
    if (!getHref) return;

    usersView.renderSpinner();

    const users = await model.loadUsers();

    usersView.render(users);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  resultsView.addHandlerResults(controlAllResults);
  searchView.addHandlerSearch(controlSearchResults);
  usersView.addHandlerAlluser(controlAllUsers);
};
init();
