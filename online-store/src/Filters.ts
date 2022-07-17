/* eslint-disable no-restricted-syntax */
import { ProductType, FilterType } from './types';

// it is an experimental complex filter)))
export default class Filters {
  static complexFilter(data: Array<ProductType>, filers:FilterType) {
    if (Object.values(filers).filter(Boolean).length === 0) {
      return data;
    }
    const filtersArr = Object.entries(filers);
    console.log('Filters => complexFilter -> filtersArr', filtersArr);

    const filtered = data.filter((cardObj) => {
      for (const oneFilter of filtersArr) {
        if (oneFilter[1] === cardObj[oneFilter[0]]) {
        // if (String(el[oneFilter[0]]).includes(String(oneFilter[1]))) {
          return true;
        }
      }
      return false;
    });

    return filtered;
  }

  static searchFilter(data: Array<ProductType>, filers:FilterType) {
    const { search } = filers;
    console.log(search);

    return data;
  }
}
