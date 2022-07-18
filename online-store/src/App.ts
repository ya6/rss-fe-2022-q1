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
    Storage.saveToStorage('data', data.default);
    Storage.saveToSession('data', data.default);

    Controller.drawControls();
    Controller.drawCartQ();
    Controller.drawCards(data.default, filters);
  }
}
