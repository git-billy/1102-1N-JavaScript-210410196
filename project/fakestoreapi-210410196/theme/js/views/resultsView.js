import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.card-container');
  _productEl = document.querySelector('.nav-user-link--procuct');

  addHandlerResults(handler) {
    this._productEl.addEventListener('click', function (e) {
      handler();
    });
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
      <div class="card">
        <div class="card__picture">
          <img src="${result.image}" alt="testImg" class="card__picture--img" />
        </div>
        <div class="card__details">
          <h4 class="card__title">
            ${result.title.slice(0, 27).trim()}
          </h4>
          <p class="card__description">
            ${result.description.slice(0, 40).trim()}
          </p>
        </div>
        <ul class="card__footer">
          <li class="car__footer--icon">
            <ion-icon class="card-icon" name="pricetag-outline"></ion-icon>
            <span>$${result.price}</span>
          </li>
          <li class="car__footer--icon">
            <ion-icon class="card-icon" name="star-outline"></ion-icon>
            <span>${result.rating.rate} rating (${result.rating.count})</span>
          </li>
        </ul>
      </div>
  `;
  }
}

export default new ResultsView();
