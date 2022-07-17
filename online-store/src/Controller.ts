import DOM from './DOM';
import Filters from './Filters';
import { ProductType, FilterType } from './types';
import ProductCard from './ProductCard';

export default class Controller {
  static drawCards(data: Array<ProductType>, filters: FilterType) {
    const container = document.querySelector('.content');
    const filteredData = Filters.complexFilter(data, filters);

    const cards = ProductCard.generateCards(filteredData);

    if (container !== null) {
      container.innerHTML = '';
      DOM.appendElements(container, cards);
    }
  }
}
