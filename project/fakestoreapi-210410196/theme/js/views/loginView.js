class loginView {
  _parentEl = document.querySelector('.card-login-form');

  getEmail() {
    const email = this._parentEl.querySelector('.email').value;
    return email;
  }

  getPassword() {
    const password = this._parentEl.querySelector('.password').value;
    return password;
  }

  verify(data, email, password) {
    this._clearInput();
    const result = data.find(i => email === i.email && password === i.password);

    const message = result ? 'Login Successful' : 'Incorrect email or password';

    this._renderMessage(message, result);
  }

  _clearInput() {
    this._parentEl.querySelector('.email').value = '';
    this._parentEl.querySelector('.password').value = '';
  }

  _renderMessage(msg, bool) {
    this._parentEl
      .querySelector('.login-message')
      .classList.add(
        `${bool ? 'login-message--success' : 'login-message--error'}`
      );

    this._parentEl.querySelector('.login-message').textContent = `${msg}`;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new loginView();
