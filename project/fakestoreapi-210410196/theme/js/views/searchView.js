class SearchView {
  _parentEl = document.querySelector('.search-form');

  getQuery() {
    const query = this._parentEl.querySelector('.search_field').value;
    this._clearInput();

    return query;
  }

  convertQuery(query) {
    let convert_query = '';

    if (!query.includes('@')) {
      const jeweleryList = ['珠寶', '首飾', '飾品'];
      const clotheList = ['服飾', '男服飾', '男生服飾'];
      const electronicList = ['3c', '3C', '3c產品', '3C產品', '電子產品'];

      if (jeweleryList.find(item => query === item))
        return (convert_query = 'jewelery');

      if (clotheList.find(item => query === item))
        return (convert_query = "men's clothing");

      if (electronicList.find(item => query === item))
        return (convert_query = 'electronics');

      // if (!convert_query) return '尚未搜尋到您要的商品';
      return '尚未搜尋到您要的商品';
    }
  }

  _clearInput() {
    this._parentEl.querySelector('.search_field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
