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
    let data = Storage.loadFromStorage('data');
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
          idx = data.findIndex((el:ProductType) => el.id === Number(control[1]));
          item = data[idx];
          item.quantity -= 1;
          item.inCart += 1;
          data[idx] = item;
          Storage.saveToStorage('data', data);

          cart[control[1]] = item;
          Storage.saveToStorage('cart', cart);

          break;

        case 'clear-all':
          Controller.clearAllData();
          data = Storage.loadFromStorage('data');
          cart = Storage.loadFromStorage('cart');

          break;

        default:
          break;
      }
      Storage.saveToStorage('filters', filters);
      // Create cards
      Controller.drawCards(Storage.loadFromStorage('data'), filters);
      Cart.showQ(cart);
    }
  }
}
