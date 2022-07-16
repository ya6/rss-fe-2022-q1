import DB from './DB';
import DOM from './DOM';
import ProductCard from './ProductCard';

console.log('index.ts');

// DOM
const container = document.querySelector('.content');

const printProducts = async () => {
  const data = await DB.getAll();
  console.log(data.default);

  // create cards
  const cards = ProductCard.generateCards(data.default);
  console.log(cards);

  // add elements to page
  if (container !== null) {
    DOM.appendElements(container, cards);
  }
};
printProducts();
