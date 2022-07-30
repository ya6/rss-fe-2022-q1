import DOM from './DOM';
import Filters from './Filters';
import { ProductType, FilterType } from './types';
import ProductCard from './ProductCard';
import Storage from './Storage';
import Cart from './Cart';
import Controls from './Controls';
import config from './config';

export default class Controller {
  static drawCards(data: Array<ProductType>, filters: FilterType, sort:FilterType) {
    const container = document.querySelector('.content');
    const filteredData = Filters.complexFilter(data, filters, sort);

    let cards = null;
    let emptyMessage;
    if (filteredData.length === 0) {
      emptyMessage = document.createElement('h2');
      emptyMessage.className = 'centered';
      emptyMessage.textContent = 'Извините, совпадений не обнаружено';

      cards = [emptyMessage];
    }
    if (filteredData.length > 0) {
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
    const paragraph = priceCont?.firstElementChild;

    if (priceCont !== null && paragraph) {
      input.value = config.topNumber;
      paragraph.textContent = input.value;
    }

    const yearCont = document.querySelector('.year');
    const input1 = yearCont?.lastElementChild as HTMLInputElement;
    const paragraph1 = yearCont?.firstElementChild;

    if (yearCont !== null && paragraph1) {
      input1.value = config.topNumber;
      paragraph1.textContent = input1.value;
    }

    const quantityCont = document.querySelector('.quantity');
    const input2 = quantityCont?.lastElementChild as HTMLInputElement;
    const paragraph2 = quantityCont?.firstElementChild;

    if (quantityCont !== null && paragraph2) {
      input2.value = config.topNumber;
      paragraph2.textContent = input2.value;
    }

    const sortBy = document.querySelector('.sort-wrap');

    // eslint-disable-next-line no-restricted-syntax
    for (const node of sortBy!.children) {
      node.classList.remove('active-push');
    }

    Controller.clearFilters();
  }

  static clearFilters() {
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
    const inputPrice = priceCont?.lastElementChild as HTMLInputElement;
    const pPrice = priceCont?.firstElementChild;

    if (priceCont !== null && pPrice) {
      inputPrice.value = config.topNumber;
      pPrice.textContent = inputPrice.value;
    }

    const yearCont = document.querySelector('.year');
    const inputYear = yearCont?.lastElementChild as HTMLInputElement;
    const pYear = yearCont?.firstElementChild;

    if (yearCont !== null && pYear) {
      inputYear.value = config.topNumber;
      pYear.textContent = inputYear.value;
    }

    const quantityCont = document.querySelector('.quantity');
    const inputQuantity = quantityCont?.lastElementChild as HTMLInputElement;
    const pQuantity = quantityCont?.firstElementChild;

    if (quantityCont !== null && pQuantity) {
      inputQuantity.value = config.topNumber;
      pQuantity.textContent = inputQuantity.value;
    }
    const select = document.querySelector('.select') as HTMLSelectElement;
    if (select) {
      select.value = 'All';
    }
    Filters.setStartValue();
  }

  static restoreFilters() {
    const filters = Storage.loadFromStorage('filters');
    const sort = Storage.loadFromStorage('sort');
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
    const paragraphPrice = priceCont?.firstElementChild;
    const inputPrice = priceCont?.lastElementChild as HTMLInputElement;
    if (paragraphPrice) {
      paragraphPrice.textContent = filters.price;
    }
    if (inputPrice) {
      inputPrice.value = filters.price;
    }

    const quantityCont = document.querySelector('.quantity');
    const paragraphQuantity = quantityCont?.firstElementChild;
    const inputQuantity = quantityCont?.lastElementChild as HTMLInputElement;
    if (paragraphQuantity) {
      paragraphQuantity.textContent = filters.quantity;
    }
    if (inputQuantity) {
      inputQuantity.value = filters.quantity;
    }

    const yearCont = document.querySelector('.year');
    const paragraphYear = yearCont?.firstElementChild;
    const inputYear = yearCont?.lastElementChild as HTMLInputElement;
    if (paragraphYear) {
      paragraphYear.textContent = filters.year;
    }
    if (inputYear) {
      inputYear.value = filters.year;
    }

    const select = document.querySelector('.select') as HTMLSelectElement;
    if (select) {
      select.value = filters.brand;
    }

    const sortBy = document.querySelector('.sort-wrap');

    // eslint-disable-next-line no-restricted-syntax
    for (const node of sortBy!.children) {
      if (sort.titleSort === 'up' && node.getAttribute('data-filter') === 'sort upTitle') {
        node.classList.add('active-push');
      } else if (sort.titleSort === 'down' && node.getAttribute('data-filter') === 'sort downTitle') {
        node.classList.add('active-push');
      } else if (sort.yearSort === 'down' && node.getAttribute('data-filter') === 'sort downYear') {
        node.classList.add('active-push');
      } else if (sort.yearSort === 'up' && node.getAttribute('data-filter') === 'sort upYear') {
        node.classList.add('active-push');
      }
    }
  }
}
