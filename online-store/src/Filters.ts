/* eslint-disable no-restricted-syntax */
import { ProductType, FilterType } from './types';

// it is an experimental complex filter)))
export default class Filters {
  static complexFilter(data: Array<ProductType>, filers:FilterType) {
    const dataForFiltering = data;
    //
    if (Filters.isEmptyFilters(filers)) {
      return dataForFiltering;
    }
    const dataForFiltering1 = Filters.searchFilter(dataForFiltering, filers);
    if (Filters.isEmptyFilters(filers)) {
      return dataForFiltering1;
    }

    const filtersArr = Object.entries(filers);
    let filtered = null;
    if (dataForFiltering1 !== null) {
      filtered = dataForFiltering1.filter((cardObj) => {
        for (const oneFilter of filtersArr) {
          if (oneFilter[1] === cardObj[oneFilter[0]]) {
            return true;
          }
        }
        return false;
      });
    }
    console.log('-->', dataForFiltering1, filtered);

    return filtered;
  }

  static searchFilter(data: Array<ProductType>, filers:FilterType) {
    const { title } = filers;
    if (!title) {
      return data;
    }
    let modifData = null;
    if (String(title).length > 0) {
      modifData = data.filter((card) => String(card.title).toLowerCase()
        .includes(String(filers.title).toLowerCase()));
      // eslint-disable-next-line no-param-reassign
      filers.title = '';
    }

    return modifData;
  }

  static isEmptyFilters(filers: FilterType) {
    if (Object.values(filers).filter(Boolean).length === 0) {
      return true;
    }
    return false;
  }
}
