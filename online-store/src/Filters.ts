/* eslint-disable no-restricted-syntax */
import { ProductType, FilterType } from './types';

// it is an experimental complex filter)))
export default class Filters {
  static complexFilter(data: Array<ProductType>, filers:FilterType) {
    let filteredData = data;

    const {
      category = [],
      title = '',
      color = [],
      brand = '',
      size = '',
      quantity = 0,
      price = 0,
    } = filers;

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

    return filteredData;
  }
}
