import Storage from './Storage';
import Controller from './Controller';

export default class EventHandler {
  static dispatch(e:Event) {
    let element = null;
    let id = null;
    const filters = Storage.loadFromSession('filters');
    const data = Storage.loadFromSession('data');

    if (e.target != null) {
      element = e.target as HTMLElement;
      id = element.getAttribute('id');
      // console.log(id);
    }

    switch (id) {
      case 'search':
        console.log('->', id);
        element = element as HTMLInputElement;

        filters.title = element.value;
        Storage.saveToSession('filters', filters);

        // Create cards
        Controller.drawCards(data, filters);

        break;

      default:
        break;
    }
  }
}
