import getCurrentPageCarsID from '../utils/getCurrentPageCarsID';
import CarController from './CarController';
import PageController from './PageController';

export default class RaceController {
  static async race() {
    const { currentPage } = PageController.getPageData();
    const { firstCarNumber, lastCarNumber } = getCurrentPageCarsID(currentPage);
    for (let index = firstCarNumber; index <= lastCarNumber; index += 1) {
      CarController.runCar(String(index));
    }
  }

  static async reset() {
    const { currentPage } = PageController.getPageData();
    const { firstCarNumber, lastCarNumber } = getCurrentPageCarsID(currentPage);
    for (let index = firstCarNumber; index <= lastCarNumber; index += 1) {
      CarController.backCar(String(index));
    }
  }
}
