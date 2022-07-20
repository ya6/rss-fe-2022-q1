import DB from './DB';

import EventHandler from './EventHandler';
import { FilterType } from './types';
import Storage from './Storage';
import Controller from './Controller';

export default class App {
  static async start() {
    // events
    document.body.addEventListener('click', EventHandler.dispatch);

    // init
    const data = await DB.getAll();
    Storage.saveToStorage('authenticData', data.default);
    const currentData = Storage.loadFromStorage('currentData') || data.default;
    Storage.saveToStorage('currentData', currentData);

    if (!Storage.loadFromStorage('cart')) {
      Storage.saveToStorage('cart', {});
    }
    if (!Storage.loadFromStorage('sort')) {
      const sort:FilterType = {
        titleSort: '',
        yearSort: '',
      };
      Storage.saveToStorage('sort', sort);
    }

    if (!Storage.loadFromStorage('filters')) {
      const filters:FilterType = {
        category: [],
        title: '',
        brand: '',
        size: '',
        color: [],
        quantity: 10,
        price: 125.95,
        year: 2022,

      };

      Storage.saveToStorage('filters', filters);
    }

    //  todo  to settings,

    // view
    Controller.drawControls();
    Controller.restoreFilters();
    Controller.drawCartQ();
    Controller.drawCards(currentData, Storage.loadFromStorage('filters'), Storage.loadFromStorage('sort'));
  }
}
