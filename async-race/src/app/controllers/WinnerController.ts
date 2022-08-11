import Storage from '../utils/Storage';

export default class WinnerController {
  static async index() {
    const currentWinner = [0, 0, 0];
    const winners = {};
    Storage.saveToStorage('currentWinner', currentWinner);
    Storage.saveToStorage('winners', winners);
  }
}
