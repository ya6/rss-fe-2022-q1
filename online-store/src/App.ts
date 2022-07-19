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

    //  todo  to settings,
    const filters:FilterType = {
      category: [],
      title: '',
      brand: '',
      size: '',
      color: [],
      quantity: 100,
      price: 1000,
      year: 2023,

    };
    Storage.saveToStorage('filters', filters);

    // view
    Controller.drawControls();
    Controller.drawCartQ();
    Controller.drawCards(currentData, filters);
  }
}
