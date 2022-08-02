import Dom from '../utils/Dom';
import View from '../View';
import TrackController from './TrackController';

export default class GarageController {
  static index() {
    console.log('GarageController => index');
    Dom.clearApp();
    View.garage();
    TrackController.index();
  }
}
