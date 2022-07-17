import DB from './DB';

import EventHandler from './EventHandler';
import { FilterType } from './types';
import Controls from './Controls';
import Storage from './Storage';
import Controller from './Controller';

export default class App {
  async start() {
    // events
    document.body.addEventListener('click', EventHandler.dispatch);

    // db
    const data = await DB.getAll();

    // filter
    const filters:FilterType = {
      category: '',
      title: '',
      brand: '',
      size: '',
      color: '',
      quantity: 0,
      price: 0,

    };

    Storage.saveToSession('filters', filters);
    Storage.saveToSession('data', data.default);

    // draw controls
    Controls.setControls(data.default); // to controller

    // draw products
    Controller.drawCards(data.default, filters);
  }
}
