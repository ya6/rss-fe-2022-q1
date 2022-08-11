import config from '../config';
import Loader from '../utils/Loader';
import Storage from '../utils/Storage';

export default class PageController {
  static async index() {
    const cars = await Loader.getAllCars();

    const pageData = {
      firstPage: 1,
      currentPage: config.startPage,
      lastPage: Math.ceil(cars.length / config.tracks),
      cars: cars.length,
    };
    Storage.saveToStorage('pageData', pageData);
  }

  static getPageData() {
    return Storage.loadFromStorage('pageData');
  }

  static addCar() {
    const pageData = Storage.loadFromStorage('pageData');
    pageData.cars += 1;
    if (pageData.cars % 8 === 0) {
      pageData.lastPage += 1;
    }
    Storage.saveToStorage('pageData', pageData);
  }

  static delCar() {
    const pageData = Storage.loadFromStorage('pageData');
    pageData.cars -= 1;
    if (pageData.cars % 7 === 0 && pageData.cars >= 7) {
      pageData.lastPage -= 1;
    }
    Storage.saveToStorage('pageData', pageData);
  }

  static prevPage() {
    const pageData = Storage.loadFromStorage('pageData');
    const {
      firstPage, currentPage,
    } = pageData;
    if (currentPage === firstPage) {
      return;
    }
    pageData.currentPage -= 1;
    Storage.saveToStorage('pageData', pageData);
  }

  static nextPage() {
    const pageData = Storage.loadFromStorage('pageData');
    const {
      currentPage, lastPage,
    } = pageData;
    if (currentPage === lastPage) {
      return;
    }
    pageData.currentPage += 1;
    Storage.saveToStorage('pageData', pageData);
  }
}
