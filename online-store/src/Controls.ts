import DOM from './DOM';
import { ProductType } from './types';

export default class Controls {
  static setControls(data: Array<ProductType>) {
    Controls.setCategories(data);
    Controls.setColors(data);
    Controls.setPrises(data);
    Controls.setYears(data);
    Controls.setQuantities(data);
    Controls.setBrands(data);
    Controls.setSorts(data);
  }

  static setCategories(data: Array<ProductType>) {
    const categoryContainer = document.querySelector('.category');

    let categories = new Set(data.map((el) => el.category));
    categories = new Set(categories);
    const categoriesArr = [...categories];
    const categoriesArr2 = categoriesArr.map((el) => {
      const button: HTMLElement = document.createElement('button');
      button.className = 'controls-category';
      button.setAttribute('data-filter', `category ${el}`);
      button.textContent = String(el).charAt(0).toUpperCase() + String(el).slice(1);

      return button;
    });
    const buttonAll: HTMLElement = document.createElement('button');
    buttonAll.className = 'controls-category';
    buttonAll.setAttribute('data-filter', 'category All');
    buttonAll.textContent = 'All';

    if (categoryContainer !== null) {
      DOM.appendElements(categoryContainer, [buttonAll]);
      DOM.appendElements(categoryContainer, categoriesArr2);
    }
  }

  static setColors(data:Array<ProductType>) {
    const colorContainer = document.querySelector('.color');
    let colors = new Set(data.map((el) => el.color));
    colors = new Set(colors);
    const colorsArr = [...colors];
    const colorsArr2 = colorsArr.map((el) => {
      const div: HTMLElement = document.createElement('div');
      div.className = 'controls-color';
      div.setAttribute('data-filter', `color ${el}`);
      div.textContent = String(el);
      div.style.background = String(el);
      return div;
    });

    const divAll: HTMLElement = document.createElement('div');
    divAll.className = 'controls-color';
    divAll.style.background = 'white';
    divAll.setAttribute('data-filter', 'color All');
    divAll.textContent = 'All';

    if (colorContainer !== null) {
      DOM.appendElements(colorContainer, [divAll]);
      DOM.appendElements(colorContainer, colorsArr2);
    }
  }

  static setPrises(data:Array<ProductType>) {
    const priceContainer = document.querySelector('.price');
    let prices = data.map((el) => el.price);
    prices = prices.sort((a, b) => Number(a) - Number(b));
    const pol = prices[prices.length - 1];
    const paragraph: HTMLElement = document.createElement('p');
    paragraph.textContent = String(pol);
    paragraph.className = 'short-paragraph';

    const input: HTMLElement = document.createElement('input');
    input.setAttribute('data-filter', 'price');
    input.setAttribute('type', 'range');
    input.setAttribute('min', '0');
    input.setAttribute('max', String(pol));
    input.setAttribute('step', '0.05');
    input.setAttribute('value', String(pol));

    if (priceContainer !== null) {
      DOM.appendElements(priceContainer, [paragraph, input]);
    }
  }

  static setYears(data:Array<ProductType>) {
    const yearContainer = document.querySelector('.year');
    let years = data.map((el) => el.year);
    years = years.sort((a, b) => Number(a) - Number(b));
    const pol1 = years[years.length - 1];
    const paragraph: HTMLElement = document.createElement('p');
    paragraph.textContent = String(pol1);
    paragraph.className = 'short-paragraph';

    const input: HTMLElement = document.createElement('input');
    input.setAttribute('data-filter', 'year');
    input.setAttribute('type', 'range');
    input.setAttribute('min', String(years[0]));
    input.setAttribute('max', String(pol1));
    input.setAttribute('step', '1');
    input.setAttribute('value', String(pol1));

    if (yearContainer !== null) {
      DOM.appendElements(yearContainer, [paragraph, input]);
    }
  }

  static setQuantities(data:Array<ProductType>) {
    const quantityContainer = document.querySelector('.quantity');
    let quantities = data.map((el) => el.quantity);
    quantities = quantities.sort((a, b) => Number(a) - Number(b));
    const pol2 = quantities[quantities.length - 1];
    const paragraph: HTMLElement = document.createElement('p');
    paragraph.textContent = String(pol2);
    paragraph.className = 'short-paragraph';

    const input: HTMLElement = document.createElement('input');
    input.setAttribute('data-filter', 'quantity');
    input.setAttribute('type', 'range');
    input.setAttribute('min', '0');
    input.setAttribute('max', String(pol2));
    input.setAttribute('step', '1');
    input.setAttribute('value', String(pol2));

    if (quantityContainer !== null) {
      DOM.appendElements(quantityContainer, [paragraph, input]);
    }
  }

  static setBrands(data:Array<ProductType>) {
    const brandContainer = document.querySelector('.brand');
    const select: HTMLElement = document.createElement('select');
    const option: HTMLElement = document.createElement('option');
    select.className = 'select';
    option.textContent = 'All';
    option.setAttribute('data-filter', 'brand All');
    let brands = new Set(data.map((el) => el.brand));
    brands = new Set(brands);
    const brandsArr = [...brands];

    const brandsArr2 = brandsArr.map((el) => {
      const option1: HTMLElement = document.createElement('option');
      option1.setAttribute('data-filter', `brand ${el}`);
      option1.textContent = String(el);

      return option1;
    });

    if (brandContainer !== null) {
      DOM.appendElements(select, [option]);
      DOM.appendElements(select, brandsArr2);
      DOM.appendElements(brandContainer, [select]);
    }
  }

  static setSorts(data:Array<ProductType>) {
    const sortContainer = document.querySelector('.sort-by');

    const div: HTMLElement = document.createElement('div');
    div.className = 'sort-wrap';
    const content = `
    <p class = "short-paragraph">Year</p>
    <button data-filter = "sort upYear">up</button>
    <button data-filter = "sort downYear">down</button>
    `;
    const content1 = `
    <p class = "short-paragraph">Title</p>
    <button data-filter = "sort upTitle">up</button>
    <button data-filter = "sort downTitle">down</button>
    `;

    if (sortContainer !== null) {
      div.insertAdjacentHTML('afterbegin', content);
      DOM.appendElements(sortContainer, [div]);
      div.insertAdjacentHTML('afterbegin', content1);
      DOM.appendElements(sortContainer, [div]);
    }
  }
}
