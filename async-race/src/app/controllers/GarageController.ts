import Dom from '../utils/Dom';
import Loader from '../utils/Loader';
import View from '../View';
import TrackController from './TrackController';
import config from '../config';

export default class GarageController {
  static async index() {
    console.log('GarageController => index');
    Dom.clearApp();
    // const cars = await Loader.getAllCars();
    const cars = await Loader.getPageOfCars(config.startPage);
    // load page

    View.garage(config.startPage, cars);
    TrackController.index(cars);
  }
}
