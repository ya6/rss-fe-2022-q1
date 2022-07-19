import { CartType } from './types';

export default class Cart {
  static add() {

  }

  static showQ(cart: CartType) {
    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in cart) {
      if (Object.prototype.hasOwnProperty.call(cart, key)) {
        count += Number(cart[key].inCart);
      }
    }
    // console.log(count);
    const CartQ = document.querySelector('.cart-count');
    if (CartQ !== null) {
      CartQ.textContent = String(count);
    }
  }
}
