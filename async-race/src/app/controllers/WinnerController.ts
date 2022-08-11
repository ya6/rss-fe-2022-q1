import popupComp from '../components/popupComponent';
import Dom from '../utils/Dom';
import Storage from '../utils/Storage';

export default class WinnerController {
  static async index() {
    const currentWinner = [0, 0, 0];
    const winners = {};
    Storage.saveToStorage('currentWinner', currentWinner);
    Storage.saveToStorage('winners', winners);
  }

  static async popupWinner(name: string, time: number) {
    const popup = popupComp(name, time);
    Dom.appendElemToDOM(document.body, popup);
    setTimeout(() => {
      Dom.delElemFromDOM([popup]);
    }, 2000);

    // alert(`${name} time: ${time}`);
  }
}
