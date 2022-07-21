/* eslint-disable no-restricted-syntax */
import Storage from './Storage';
import { ProductType, FilterType } from './types';

export default class Filters {
  static complexFilter(data: Array<ProductType>, filers:FilterType, sort: FilterType) {
    let filteredData:Array<ProductType> = Storage.loadFromStorage('currentData');

    const {
      category = [],
      title = '',
      color = [],
      price = 0,
      year = 0,
      brand = '',
      quantity = 0,

    } = filers;

    const {
      titleSort = '',
      yearSort = '',
    } = sort;

    if (title) {
      filteredData = filteredData.filter((card) => String(card.title).toLowerCase()
        .includes(String(filers.title).toLowerCase()));
    }

    if (Array.isArray(category)) {
      if (category.length) {
        filteredData = filteredData.filter((card) => category.some((cat) => card.category === cat));
      }
    }

    if (Array.isArray(color)) {
      if (color.length) {
        filteredData = filteredData.filter((card) => color.some((col) => card.color === col));
      }
    }

    filteredData = filteredData.filter((card) => Number(card.price) <= Number(price));
    filteredData = filteredData.filter((card) => Number(card.quantity) <= Number(quantity));
    filteredData = filteredData.filter((card) => Number(card.year) <= Number(year));
    if (brand) {
      filteredData = filteredData.filter((card) => card.brand === brand);
    }

    if (titleSort) {
      filteredData = titleSort === 'up'
        ? filteredData.sort((a, b) => String(a.title).charCodeAt(0) - String(b.title).charCodeAt(0))
        // eslint-disable-next-line max-len
        : filteredData.sort((a, b) => String(b.title).charCodeAt(0) - String(a.title).charCodeAt(0));
    }
    if (yearSort) {
      filteredData = yearSort === 'up'
        ? filteredData.sort((a, b) => Number(b.year) - Number(a.year))
        : filteredData.sort((a, b) => Number(a.year) - Number(b.year));
    }

    return filteredData;
  }
}
