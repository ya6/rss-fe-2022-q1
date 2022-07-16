import DB from './DB';
import DOM from './DOM';
import ProductCard from './ProductCard';
import Filters from './Filters';
import EventHandler from './EventHandler';
import { ProductType, FilterType } from './types';
import Controls from './Controls';

export default class App {
  dataAll:{data: Array<ProductType> | null} = { data: null };
  async start() {
    const container = document.querySelector('.content');

    // events
    document.body.addEventListener('click', EventHandler.dispatch);

    const data = await DB.getAll();
    this.dataAll.data = data.default;

    Controls.setCategories(data.default);

    // Filter data
    const filters:FilterType = { title: '' };

    const filteredData = Filters.complexFilter(data.default, filters);

    // Create cards
    const cards = ProductCard.generateCards(filteredData);

    // Add elements to page
    if (container !== null) {
      DOM.appendElements(container, cards);
    }
  }
}
