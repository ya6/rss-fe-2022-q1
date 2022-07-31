import GarageController from './controllers/GarageController';
import TopScoresController from './controllers/TopScoresController';

export default class Dispatcher {
  static clickHandler(e:Event) {
    let button: Array<string>;
    const element = e.target as HTMLElement;
    console.log('Dispatcher => clickDispatcher', element);

    if (element !== null && element.getAttribute('data-button')) {
      button = element.getAttribute('data-button')!.split(' ');

      if (button[0] === 'route') {
        Dispatcher.routeDispatcher(button[1]);
      }
    }
  }

  static routeDispatcher(route:string) {
    if (route === 'garage') {
      GarageController.index();
    }
    if (route === 'top') {
      TopScoresController.index();
    }
  }
}
