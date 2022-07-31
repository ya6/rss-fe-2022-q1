import Dom from './utils/Dom';
import { CarType } from './types';
import appComponent from './views/appComponent';
import garage from './views/garage';
import topScores from './views/topScores';

export default class View {
  static async home() {
    console.log('View => home');
    Dom.appendElemToDOM(document.body, appComponent);
  }

  static async garage(data: Array<CarType>) {
    console.log('View => garage', data);
    const app = document.querySelector('.page-container') as HTMLElement;
    if (app !== null) {
      Dom.delAllChildren(app);

      Dom.appendElemToDOM(app, garage);
    }
  }

  static async topScores(data: Array<CarType>) {
    console.log('View => topScores', data);
    const app = document.querySelector('.page-container') as HTMLElement;
    if (app !== null) {
      Dom.delAllChildren(app);
      Dom.appendElemToDOM(app, topScores);
    }
  }
}
