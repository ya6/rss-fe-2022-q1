import View from '../View';
import GarageController from './GarageController';

export default class AppController {
  static async index() {
    View.home();
    GarageController.index();
  }
}
