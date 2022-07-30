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

export default { filters, sort };
