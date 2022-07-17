import Storage from './Storage';
import Controller from './Controller';

export default class EventHandler {
  static dispatch(e:Event) {
    let element = null;
    let control = null;
    const filters = Storage.loadFromSession('filters');
    const data = Storage.loadFromSession('data');

    if (e.target != null) {
      element = e.target as HTMLElement;
      // if (element.getAttribute('data-filter') === null) {
      //   return;
      // }

      control = element.getAttribute('data-filter')?.split(' ') || [];
      console.log(control);

      switch (control[0]) {
        case 'search':

          element = element as HTMLInputElement;
          filters.title = element.value;

          break;

        case 'category':
          // eslint-disable-next-line prefer-destructuring
          filters.category = control[1];
          break;

        default:
          break;
      }
      Storage.saveToSession('filters', filters);
      // Create cards
      Controller.drawCards(data, filters);
    }
  }
}
