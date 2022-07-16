import DB from './DB';
import DOM from './DOM';
import ProductCard from './ProductCard';
import Filters from './Filters';
import EventHandler from './EventHandler';
import { FilterType } from './types';

// DOM
const container = document.querySelector('.content');

// events
document.body.addEventListener('click', EventHandler.dispatch);

const start = async () => {
  const data = await DB.getAll();

  // Filter data

  const filters:FilterType = { title: '' };

  const filteredData = Filters.complexFilter(data.default, filters);

  // Create cards
  const cards = ProductCard.generateCards(filteredData);

  // Add elements to page
  if (container !== null) {
    DOM.appendElements(container, cards);
  }
};
start();
