import garage from './components/garage';
import topScores from './components/topScores';
import Router from './Router';

export default class Dispatcher {
  static clickDispatcher(e:Event) {
    let button = null;
    const garageComponent = garage as HTMLElement;
    const element = e.target as HTMLElement;
    const topComponent = topScores as HTMLElement;
    console.log('Dispatcher => clickDispatcher', element);
    if (element !== null) {
      button = element.getAttribute('data-button');
    }

    switch (button) {
      case 'garage':
        Router.route(garageComponent);
        break;

      case 'top':
        Router.route(topComponent);
        break;

      default:
        break;
    }
  }
}
