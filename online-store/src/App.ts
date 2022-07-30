import DB from './DB';

import EventHandler from './EventHandler';
import Storage from './Storage';
import Controller from './Controller';
import config from './config';
import Filters from './Filters';

export default class App {
  static async start() {
    // events
    document.body.addEventListener('click', EventHandler.dispatch);
    const searchInput = document.querySelector('#search');
    if (searchInput) {
      searchInput.addEventListener('input', EventHandler.searchDispatch);
    }

    // init
    const data = await DB.getAll();
    Storage.saveToStorage('authenticData', data.default);
    const currentData = Storage.loadFromStorage('currentData') || data.default;
    Storage.saveToStorage('currentData', currentData);

    if (!Storage.loadFromStorage('cart')) {
      Storage.saveToStorage('cart', {});
    }
    if (!Storage.loadFromStorage('sort')) {
      Storage.saveToStorage('sort', config.sort);
    }

    if (!Storage.loadFromStorage('filters')) {
      Storage.saveToStorage('filters', config.filters);
    }

    // view
    Filters.setStartValue();
    Controller.drawControls();
    Controller.restoreFilters();
    Controller.drawCartQ();
    Controller.drawCards(currentData, Storage.loadFromStorage('filters'), Storage.loadFromStorage('sort'));
  }
}
