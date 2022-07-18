import DOM from './DOM';
import Filters from './Filters';
import { ProductType, FilterType } from './types';
import ProductCard from './ProductCard';
import Storage from './Storage';
import Cart from './Cart';
import Controls from './Controls';

export default class Controller {
  static data = Storage.loadFromStorage('data');
  static cart = Storage.loadFromStorage('cart');

  static drawCards(data: Array<ProductType>, filters: FilterType) {
    const container = document.querySelector('.content');
    const filteredData = Filters.complexFilter(data, filters);
    let cards = null;
    if (filteredData !== null) {
      cards = ProductCard.generateCards(filteredData);
    }

    if (container !== null && cards !== null) {
      container.innerHTML = '';
      DOM.appendElements(container, cards);
    }
  }

  static drawCartQ() {
    Cart.showQ(Controller.cart);
  }

  static drawControls() {
    Controls.setControls(Controller.data);
  }

  static clearAllData() {
    Storage.clearAll();
    const authenticData = Storage.loadFromSession('data');
    Storage.saveToStorage('data', authenticData);
    Cart.showQ({});
    Controller.drawCards(authenticData, {});
  }
}
