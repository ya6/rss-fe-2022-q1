/* eslint-disable no-restricted-syntax */
import { ProductType, FilterType } from './types';

// it is an experimental complex filter)))
export default class Filters {
  static complexFilter(data: Array<ProductType>, filers:FilterType) {
    if (Object.values(filers).filter(Boolean).length === 0) {
      return data;
    }
    const filtersArr = Object.entries(filers);

    const filtered = data.filter((el) => {
      for (const oneFilter of filtersArr) {
        // if (oneFilter[1] === el[oneFilter[0]])
        if (String(el[oneFilter[0]]).includes(String(oneFilter[1]))) {
          return el;
        }
      }
      return false;
    });

    return filtered;
  }
}
