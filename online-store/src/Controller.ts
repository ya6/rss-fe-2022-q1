import DOM from './DOM';
import Filters from './Filters';
import { ProductType, FilterType } from './types';
import ProductCard from './ProductCard';
import Storage from './Storage';
import Cart from './Cart';
import Controls from './Controls';

export default class Controller {
  static drawCards(data: Array<ProductType>, filters: FilterType, sort:FilterType) {
    const container = document.querySelector('.content');
    const filteredData = Filters.complexFilter(data, filters, sort);
    let cards = null;
    if (filteredData !== null) {
      cards = ProductCard.generateCards(filteredData);
    }

    if (container !== null && cards !== null) {
      container.innerHTML = '';
      DOM.appendElements(container, cards);
    }
  }

  static drawCartQ() {
    Cart.showQ();
  }

  static drawControls() {
    Controls.setControls(Storage.loadFromStorage('currentData'));
  }

  static clearAllData() {
    const authenticData = Storage.loadFromStorage('authenticData');

    Storage.saveToStorage('currentData', authenticData);
    Storage.saveToStorage('cart', {});
    const sort:FilterType = {
      titleSort: '',
      yearSort: '',
    };
    Storage.saveToStorage('sort', sort);

    // del active

    const categoryCont = document.querySelector('.category')?.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const el of categoryCont!) {
      el.classList.remove('active');
    }

    const colorCont = document.querySelector('.color')?.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const el of colorCont!) {
      el.classList.remove('active-push');
    }

    const priceCont = document.querySelector('.price');
    const input = priceCont?.lastElementChild as HTMLInputElement;
    const p = priceCont?.firstElementChild;

    if (priceCont !== null && p) {
      input.value = '1000';
      p.textContent = input.value;
    }

    const yearCont = document.querySelector('.year');
    const input1 = yearCont?.lastElementChild as HTMLInputElement;
    const p1 = yearCont?.firstElementChild;

    if (yearCont !== null && p1) {
      input1.value = '2022';
      p1.textContent = input1.value;
    }

    const quantityCont = document.querySelector('.quantity');
    const input2 = quantityCont?.lastElementChild as HTMLInputElement;
    const p2 = quantityCont?.firstElementChild;

    if (quantityCont !== null && p2) {
      input2.value = '100';
      p2.textContent = input2.value;
    }

    

    Controller.clearFilters();
  }

  static clearFilters() {
    const filters:FilterType = {
      category: [],
      title: '',
      brand: '',
      size: '',
      color: [],
      quantity: 100,
      price: 1000,
      year: 2023,

    };
    const categoryCont = document.querySelector('.category')?.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const el of categoryCont!) {
      el.classList.remove('active');
    }

    const colorCont = document.querySelector('.color')?.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const el of colorCont!) {
      el.classList.remove('active-push');
    }

    const priceCont = document.querySelector('.price');
    const input = priceCont?.lastElementChild as HTMLInputElement;
    const p = priceCont?.firstElementChild;

    if (priceCont !== null && p) {
      input.value = '1000';
      p.textContent = input.value;
    }

    const yearCont = document.querySelector('.year');
    const input1 = yearCont?.lastElementChild as HTMLInputElement;
    const p1 = yearCont?.firstElementChild;

    if (yearCont !== null && p1) {
      input1.value = '2022';
      p1.textContent = input1.value;
    }

    const quantityCont = document.querySelector('.quantity');
    const input2 = quantityCont?.lastElementChild as HTMLInputElement;
    const p2 = quantityCont?.firstElementChild;

    if (quantityCont !== null && p2) {
      input2.value = '100';
      p2.textContent = input2.value;
    }
    Storage.saveToStorage('filters', filters);
  }

  static restoreFilters() {
    const filters = Storage.loadFromStorage('filters');
    const categoryCont = document.querySelector('.category')?.children;

    // eslint-disable-next-line no-restricted-syntax
    for (const el of categoryCont!) {
      if (filters.category.includes(el.getAttribute('data-filter')?.split(' ')[1])) {
        el.classList.add('active');
      }
    }
    const colorCont = document.querySelector('.color')?.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const el of colorCont!) {
      if (filters.color.includes(el.getAttribute('data-filter')?.split(' ')[1])) {
        el.classList.add('active-push');
      }
    }

    const priceCont = document.querySelector('.price');
    const p = priceCont?.firstElementChild;
    const input = priceCont?.lastElementChild as HTMLInputElement;
    if (p) {
      p.textContent = filters.price;
    }
    if (input) {
      input.value = filters.price;
    }

    const quantityCont = document.querySelector('.quantity');
    const p1 = quantityCont?.firstElementChild;
    const input1 = quantityCont?.lastElementChild as HTMLInputElement;
    if (p1) {
      p1.textContent = filters.quantity;
    }
    if (input1) {
      input1.value = filters.quantity;
    }

    const yearCont = document.querySelector('.year');
    const p2 = yearCont?.firstElementChild;
    const input2 = yearCont?.lastElementChild as HTMLInputElement;
    if (p2) {
      p2.textContent = filters.year;
    }
    if (input2) {
      input2.value = filters.year;
    }

    const select = document.querySelector('.select') as HTMLSelectElement;
    if (select) {
      select.value = filters.brand;
    }
  }
}
