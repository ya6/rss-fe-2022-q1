import Dom from '../utils/Dom';
import View from '../View';
import WinnersLoader from '../utils/WinnersLoader';
import { WinnersType } from '../types';

export default class TopScoresController {
  static async index() {
    // console.log('TopScoresController => index');
    Dom.clearApp();
    const winners = await WinnersLoader.getWinners();
    View.topScores(winners);
    TopScoresController.setWinners(winners);
  }

  static async setWinners(winners: Array<WinnersType>) {
    const tableContainer = document.querySelector('.container') as HTMLElement;
    if (tableContainer !== null) {
      // eslint-disable-next-line no-restricted-syntax
      for (const winner of winners) {
        View.winnersRow(tableContainer, winner);
      }
    }
  }
}
