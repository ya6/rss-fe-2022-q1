import { FilterType } from './types';

const filters:FilterType = {
  category: [],
  title: '',
  brand: '',
  size: '',
  color: [],
  quantity: 0,
  price: 0,
  year: 0,
};

const sort:FilterType = {
  titleSort: '',
  yearSort: '',
};

const topNumber:string = '9999';

export default { filters, sort, topNumber };
