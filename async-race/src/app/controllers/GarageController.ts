import Dom from '../utils/Dom';
import Loader from '../utils/Loader';
import View from '../View';
import TrackController from './TrackController';

import PageController from './PageController';

export default class GarageController {
  static async index() {
    Dom.clearApp();

    const pageData = PageController.getPageData();
    const cars = await Loader.getPageOfCars(pageData.currentPage);

    View.garage(pageData, cars);
    TrackController.index(cars);
  }
}
