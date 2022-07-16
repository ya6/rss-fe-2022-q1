/* eslint-disable no-restricted-syntax */
import { ProductType, FilterType } from './types';

export default class Filters {
  static filerCards(data: Array<ProductType>, filers:Array<FilterType>) {
    if (filers.length === 0) {
      return data;
    }

    // const filtered = data.filter((el) => filers[0][1] === el[filers[0][0]]);
    const filtered = data.filter((el) => {
      for (const oneFilter of filers) {
        if (oneFilter[1] === el[oneFilter[0]]) {
          return el;
        }
      }
      return false;
    });

    return filtered;
  }
}
