import Storage from './Storage';
import Controller from './Controller';
import { ProductType } from './types';
import Cart from './Cart';

export default class EventHandler {
  static dispatch(e:Event) {
    let element = null;
    let item = null;
    let control: string[];
    let idx;
    const filters = Storage.loadFromStorage('filters');
    let currentData = Storage.loadFromStorage('currentData');
    let cart = Storage.loadFromStorage('cart');

    if (e.target != null) {
      element = e.target as HTMLElement;
      // console.log(element);

      // if (element.getAttribute('data-filter') === null) {
      //   return;
      // }

      control = element.getAttribute('data-filter')?.split(' ') || [];
      // console.log(control);

      switch (control[0]) {
        case 'search':
          element = element as HTMLInputElement;
          filters.title = element.value;
          break;

        case 'category':
          // eslint-disable-next-line prefer-destructuring
          filters.category = control[1];
          break;

        case 'id':
          idx = currentData.findIndex((el:ProductType) => el.id === Number(control[1]));
          item = currentData[idx];
          item.quantity -= 1;
          item.inCart += 1;
          currentData[idx] = item;
          Storage.saveToStorage('currentData', currentData);

          cart[control[1]] = item;
          Storage.saveToStorage('cart', cart);

          break;

        case 'clear-all':
          Controller.clearAllData();
          currentData = Storage.loadFromStorage('currentData');
          cart = Storage.loadFromStorage('cart');

          break;

        default:
          break;
      }
      Storage.saveToStorage('filters', filters);
      // Create cards
      Controller.drawCards(Storage.loadFromStorage('currentData'), filters);
      Cart.showQ(cart);
    }
  }
}
