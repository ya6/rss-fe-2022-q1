import GarageController from './controllers/GarageController';
import TopScoresController from './controllers/TopScoresController';

export default class Dispatcher {
  static clickHandler(e:Event) {
    e.preventDefault();
    let button: Array<string>;
    const element = e.target as HTMLElement;
    console.log('Dispatcher => clickDispatcher', element);

    if (element !== null && element.getAttribute('data-button')) {
      button = element.getAttribute('data-button')!.split(' ');

      if (button[0] === 'route') {
        Dispatcher.routeDispatcher(button[1]);
      }
      if (button[0] === 'control') {
        Dispatcher.controlDispatcher(button[1]);
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

  static controlDispatcher(action:string) {
    console.log(action);

    if (action === 'create') {
      const nameInputC = document.querySelector('[data-create="name"]') as HTMLInputElement;
      const colorInputC = document.querySelector('[data-create="color"]') as HTMLInputElement;
      console.log(nameInputC.value, colorInputC.value);
    }
    if (action === 'update') {
      const nameInputU = document.querySelector('[data-update="name"]') as HTMLInputElement;
      const colorInputU = document.querySelector('[data-update="color"]') as HTMLInputElement;
      console.log(nameInputU!.value, colorInputU.value);
    }
  }
}
