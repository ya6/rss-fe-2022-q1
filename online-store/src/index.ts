import DB from './DB';
import DOM from './DOM';
import ProductCard from './ProductCard';
import Filters from './Filters';
import { FilterType } from './types';

console.log('index.ts');

// DOM
const container = document.querySelector('.content');

const start = async () => {
  const data = await DB.getAll();

  // filter data
  // const filters:Array<FilterType> = [['color', 'gray'], ['category', 'shoes']];
  const filters:Array<FilterType> = [];

  const filteredData = Filters.filerCards(data.default, filters);

  // create cards
  const cards = ProductCard.generateCards(filteredData);

  // add elements to page
  if (container !== null) {
    DOM.appendElements(container, cards);
  }
};
start();
