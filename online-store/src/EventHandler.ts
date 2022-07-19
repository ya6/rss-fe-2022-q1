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
    const currentData = Storage.loadFromStorage('currentData');
    const cart = Storage.loadFromStorage('cart');
    const categoryCont = document.querySelector('.category')?.children;
    const colorCont = document.querySelector('.color')?.children;
    // console.log(colorCont);

    if (e.target != null) {
      element = e.target as HTMLElement;
      // console.log(element);

      // if (element.getAttribute('data-filter') === null) {
      //   return;
      // }

      control = element.getAttribute('data-filter')?.split(' ') || [];

      switch (control[0]) {
        case 'search':
          element = element as HTMLInputElement;
          filters.title = element.value;
          break;

        case 'category':
          // console.log('category', control[1]);
          if (control[1] === 'All') {
            // eslint-disable-next-line no-restricted-syntax
            for (const el of categoryCont!) {
              el.classList.remove('active');
            }
            filters.category = [];
          } else if (element.classList.contains('active')) {
            element.classList.remove('active');

            filters.category = filters.category.filter((cat: string) => cat !== control[1]);
          } else {
            filters.category.push(control[1]);
            element.classList.add('active');
          }

          break;

        case 'price':
          element = element as HTMLInputElement;
          filters.price = element.value;
          element!.parentNode!.firstElementChild!.textContent = element.value;
          break;

        case 'color':
          if (control[1] === 'All') {
            // eslint-disable-next-line no-restricted-syntax
            for (const el of colorCont!) {
              el.classList.remove('active-push');
            }
            filters.color = [];
          } else if (element.classList.contains('active-push')) {
            element.classList.remove('active-push');

            filters.color = filters.color.filter((col: string) => col !== control[1]);
          } else {
            filters.color.push(control[1]);
            element.classList.add('active-push');
          }
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
          break;

        default:
          break;
      }

      // Create cards
      Storage.saveToStorage('filters', filters);
      Controller.drawCards(Storage.loadFromStorage('currentData'), filters);
      Cart.showQ();
    }
  }
}
