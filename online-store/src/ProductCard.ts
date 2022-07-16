import { ProductType } from './types';

export default class ProductCard {
  static generateCards(data: Array<ProductType>) {
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
      <h2 class="product-price">$${el.price}</h3>
      <h2 class="product-quantity">${el.quantity} items</h3>
    </div>
    <button class="product-button">Add to Cart</button>
    `;
    card.insertAdjacentHTML('afterbegin', content);
    return card;
  }
}
