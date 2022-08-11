import View from '../View';
import GarageController from './GarageController';
import PageController from './PageController';
import WinnerController from './WinnerController';

export default class AppController {
  static async index() {
    WinnerController.index();
    PageController.index();
    View.home();
    GarageController.index();
  }
}
