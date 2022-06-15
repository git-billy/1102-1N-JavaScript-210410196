import View from './View.js';

class usersView extends View {
  _parentElement = document.querySelector('.card-container');
  _userEl = document.querySelector('.nav-user-link--user');

  addHandlerAlluser(handler) {
    this._userEl.addEventListener('click', function (e) {
      handler();
    });
  }

  _generateTableMarkup(tr) {
    return `
      <div class="card-table">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            ${tr}
          </tbody>
        </table>
      </div>
    `;
  }

  _generateMarkup() {
    const str = this._data.map(this._generateMarkupPreview).join('');
    const merge = this._generateTableMarkup(str);
    return (this._data = merge);
  }

  _generateMarkupPreview(result) {
    return `
        <tr>
          <td>${result.id}</td>
          <td>${result.email}</td>
          <td>${result.username}</td>
          <td>${result.password}</td>
        </tr>
  `;
  }
}

export default new usersView();
