import { ProductType } from './types';

export default class ProductCard {
  static generateCards(data: Array<ProductType>) {
    // console.log('ProductCard generateCards');

    const elements = data.map((el) => this.createCard(el));
    return elements;
  }

  static createCard(el: ProductType) {
    const card = document.createElement('div');
    card.className = 'product';
    const content = `
    <div class="product-image" style="background-image: url(${el.img});"></div>
    <h3 class="product-title">${el.title}</h3>
    <div class="product-values">
      <h2 class="product-brand">${el.brand}</h3>
      <h2 class="product-price">$${el.price}</h3>
    </div>
    <div class="product-info">
      <h2 class="product-year">${el.year}</h3>
      <h2 class="product-quantity">${el.quantity} items</h3>
    </div>
    <button class="product-button" data-filter="id ${el.id}">Add to Cart</button>
    `;
    card.insertAdjacentHTML('afterbegin', content);
    return card;
  }
}
