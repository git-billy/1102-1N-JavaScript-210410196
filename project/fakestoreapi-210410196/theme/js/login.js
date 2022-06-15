import * as model from './model.js';
import loginView from './views/loginView.js';

const controlLogin = async function () {
  // 1) Load Users
  const users = await model.loadUsers();

  // 2) Get Input Email
  const email = loginView.getEmail();

  // 3) Get Input Password
  const password = loginView.getPassword();

  // 4) Verfiy User
  console.log(users);
  loginView.verify(users, email, password);
};

const login = function () {
  loginView.addHandlerSearch(controlLogin);
};
login();
