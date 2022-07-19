import DOM from './DOM';
import Filters from './Filters';
import { ProductType, FilterType } from './types';
import ProductCard from './ProductCard';
import Storage from './Storage';
import Cart from './Cart';
import Controls from './Controls';

export default class Controller {
  static drawCards(data: Array<ProductType>, filters: FilterType) {
    // console.log('Controller drawCards');

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
    Cart.showQ();
  }

  static drawControls() {
    Controls.setControls(Storage.loadFromStorage('currentData'));
  }

  static clearAllData() {
    const authenticData = Storage.loadFromStorage('authenticData');

    // Storage.clearAll();
    localStorage.clear();
    Storage.saveToStorage('authenticData', authenticData);
    Storage.saveToStorage('currentData', authenticData);
    Storage.saveToStorage('cart', {});
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
    // console.log(Storage.loadFromStorage('filters'));
  }
}
