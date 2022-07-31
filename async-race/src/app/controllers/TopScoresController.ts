import Loader from '../utils/Loader';
import View from '../View';

export default class TopScoresController {
  static async index() {
    console.log('TopScoresController => index');
    const cars = await Loader.getAllCars();
    View.topScores(cars);
  }
}
