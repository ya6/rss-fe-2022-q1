import DOM from './DOM';
import { ProductType } from './types';

export default class Controls {
  static setCategories(data: Array<ProductType>) {
    const categoryContainer = document.querySelector('.category');

    let categories = new Set(data.map((el) => el.category));
    categories = new Set(categories);
    const categoriesArr = [...categories];
    const categoriesArr2 = categoriesArr.map((el) => {
      const button: HTMLElement = document.createElement('button');
      button.className = 'controls-category';
      button.textContent = String(el).charAt(0).toUpperCase() + String(el).slice(1);

      return button;
    });

    if (categoryContainer !== null) {
      DOM.appendElements(categoryContainer, categoriesArr2);
    }

    const colorContainer = document.querySelector('.color');
    let colors = new Set(data.map((el) => el.color));
    colors = new Set(colors);
    const colorsArr = [...colors];
    const colorsArr2 = colorsArr.map((el) => {
      const div: HTMLElement = document.createElement('div');
      div.className = 'controls-color';
      div.textContent = '-';

      div.style.background = String(el);

      return div;
    });
    if (colorContainer !== null) {
      DOM.appendElements(colorContainer, colorsArr2);
    }

    const priceContainer = document.querySelector('.price');
    let prices = data.map((el) => el.price);
    prices = prices.sort((a, b) => Number(a) - Number(b));
    const pol = +prices[prices.length - 1] - +prices[0];
    const p: HTMLElement = document.createElement('p');
    p.textContent = String(pol);

    console.log(prices);
    const input: HTMLElement = document.createElement('input');
    input.setAttribute('type', 'range');
    input.setAttribute('min', '0');
    input.setAttribute('max', String(prices[prices.length - 1]));
    input.setAttribute('id', 'pr');
    input.setAttribute('name', 'pr');
    input.setAttribute('value', String(pol));
    console.log(input);

    if (priceContainer !== null) {
      DOM.appendElements(priceContainer, [p, input]);
    }
  }
}
