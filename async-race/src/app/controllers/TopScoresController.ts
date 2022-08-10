import Dom from '../utils/Dom';
import View from '../View';

export default class TopScoresController {
  static async index() {
    // console.log('TopScoresController => index');
    Dom.clearApp();
    View.topScores();
  }
}
