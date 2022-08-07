import Dom from '../utils/Dom';
import Loader from '../utils/Loader';
import View from '../View';
import TrackController from './TrackController';

export default class GarageController {
  static async index() {
    console.log('GarageController => index');
    Dom.clearApp();
    const cars = await Loader.getAllCars();
    View.garage(cars);
    TrackController.index(cars);
  }
}
