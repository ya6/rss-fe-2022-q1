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
    const pol = prices[prices.length - 1];
    const p: HTMLElement = document.createElement('p');
    p.textContent = String(pol);
    p.className = 'short-paragraph';

    const input: HTMLElement = document.createElement('input');
    input.setAttribute('type', 'range');
    input.setAttribute('min', '0');
    input.setAttribute('max', String(pol));
    input.setAttribute('id', 'pr');
    input.setAttribute('name', 'pr');
    input.setAttribute('value', String(pol));

    if (priceContainer !== null) {
      DOM.appendElements(priceContainer, [p, input]);
    }

    const sortContainer = document.querySelector('.sort-by');

    const div: HTMLElement = document.createElement('div');
    const content = `
    <p class = "short-paragraph">year</p>
    <button>up</button>
    <button>down</button>
    `;

    if (sortContainer !== null) {
      div.insertAdjacentHTML('afterbegin', content);
      DOM.appendElements(sortContainer, [div]);
    }

    const yearContainer = document.querySelector('.year');
    let years = data.map((el) => el.year);
    years = years.sort((a, b) => Number(a) - Number(b));
    const pol1 = years[years.length - 1];
    const p1: HTMLElement = document.createElement('p');
    p1.textContent = String(pol1);
    p1.className = 'short-paragraph';

    const input1: HTMLElement = document.createElement('input');
    input1.setAttribute('type', 'range');
    input1.setAttribute('min', '0');
    input1.setAttribute('max', String(pol1));
    input1.setAttribute('step', '1');
    input1.setAttribute('id', 'pr');
    input1.setAttribute('name', 'pr');
    input1.setAttribute('value', String(pol1));

    if (yearContainer !== null) {
      DOM.appendElements(yearContainer, [p1, input1]);
    }

    // quantity
    const quantityContainer = document.querySelector('.quantity');
    let quantities = data.map((el) => el.quantity);
    quantities = quantities.sort((a, b) => Number(a) - Number(b));
    const pol2 = quantities[quantities.length - 1];
    const p2: HTMLElement = document.createElement('p');
    p2.textContent = String(pol2);
    p2.className = 'short-paragraph';

    const input2: HTMLElement = document.createElement('input');
    input2.setAttribute('type', 'range');
    input2.setAttribute('min', '0');
    input2.setAttribute('max', String(pol2));
    input2.setAttribute('step', '1');
    input2.setAttribute('id', 'pr');
    input2.setAttribute('name', 'pr');
    input2.setAttribute('value', String(pol2));

    if (quantityContainer !== null) {
      DOM.appendElements(quantityContainer, [p2, input2]);
    }

    const brandContainer = document.querySelector('.brand');
    const select: HTMLElement = document.createElement('select');
    const option: HTMLElement = document.createElement('option');
    option.textContent = 'All';
    let brands = new Set(data.map((el) => el.brand));
    brands = new Set(brands);
    const brandsArr = [...brands];
    const brandsArr2 = brandsArr.map((el) => {
      const option: HTMLElement = document.createElement('option');
      option.className = '';
      option.textContent = String(el);

      return option;
    });

    if (brandContainer !== null) {
      DOM.appendElements(select, [option]);
      DOM.appendElements(select, brandsArr2);
      DOM.appendElements(brandContainer, [select]);
    }
  }
}
