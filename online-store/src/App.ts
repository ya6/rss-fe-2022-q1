import DB from './DB';

import EventHandler from './EventHandler';
import { FilterType } from './types';
import Storage from './Storage';
import Controller from './Controller';

export default class App {
  static async start() {
    // events
    document.body.addEventListener('click', EventHandler.dispatch);

    // db
    const data = await DB.getAll();
    Storage.saveToStorage('authenticData', data.default);
    const currentData = Storage.loadFromStorage('currentData') || data.default;
    Storage.saveToStorage('currentData', currentData);

    // console.log('currentData', currentData);

    //  todo  to settings,
    const filters:FilterType = {
      category: '',
      title: '',
      brand: '',
      size: '',
      color: '',
      quantity: 0,
      price: 0,

    };

    Storage.saveToStorage('filters', filters);

    Controller.drawControls();
    Controller.drawCartQ();
    Controller.drawCards(currentData, filters);
  }
}
