import View from '../View';
import GarageController from './GarageController';
import PageController from './PageController';

export default class AppController {
  static async index() {
    PageController.index();
    View.home();
    GarageController.index();
  }
}
