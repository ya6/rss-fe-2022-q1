import config from './config';
import CarController from './controllers/CarController';
import GarageController from './controllers/GarageController';
import PageController from './controllers/PageController';
import RaceController from './controllers/RaceController';
import TopScoresController from './controllers/TopScoresController';

export default class Dispatcher {
  static clickHandler(e:Event) {
    // e.preventDefault();
    let button: Array<string>;
    const element = e.target as HTMLElement;
    // console.log('Dispatcher => clickDispatcher', element);

    if (element !== null && element.getAttribute('data-button')) {
      button = element.getAttribute('data-button')!.split(' ');

      if (button[0] === 'route') {
        Dispatcher.routeDispatcher(button[1]);
      }
      if (button[0] === 'control') {
        Dispatcher.controlDispatcher(button[1], element);
      }
      if (button[0] === 'pageControl') {
        Dispatcher.pageControlDispatcher(button[1], element);
      }

      if (button[0] === 'race') {
        Dispatcher.raceControlDispatcher(button[1], element);
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

  static controlDispatcher(action:string, element: HTMLElement) {
    if (action === 'create') {
      const nameInputC = document.querySelector('[data-create="name"]') as HTMLInputElement;
      const colorInputC = document.querySelector('[data-create="color"]') as HTMLInputElement;
      if (nameInputC.value.length > 0) {
        CarController.createCar({ name: nameInputC.value, color: colorInputC.value });
        GarageController.index();
      } else return;
    }
    if (action === 'update') {
      const nameInputU = document.querySelector('[data-update="name"]') as HTMLInputElement;
      const colorInputU = document.querySelector('[data-update="color"]') as HTMLInputElement;
      const idInputU = document.querySelector('[data-update-id]') as HTMLInputElement;
      CarController.updateCar(idInputU.value, { name: nameInputU.value, color: colorInputU.value });
      GarageController.index();
    }
    if (action === 'select') {
      const nameInputU = document.querySelector('[data-update="name"]') as HTMLInputElement;
      const colorInputU = document.querySelector('[data-update="color"]') as HTMLInputElement;
      const idInputU = document.querySelector('[data-update-id]') as HTMLInputElement;
      const [name, color] = element.getAttribute('data-name')!.split(' ');
      idInputU.value = element.getAttribute('data-id')!;
      nameInputU.value = name;
      colorInputU.value = color;
    }
    if (action === 'del') {
      CarController.delCar(element.getAttribute('data-id')!);
      GarageController.index();
    }
    if (action === 'generate') {
      CarController.generateCars(config.generateCars);
      GarageController.index();
    }

    if (action === 'run') {
      const id = element.getAttribute('data-id')!;
      CarController.runCar(id);
    }
    if (action === 'back') {
      const id = element.getAttribute('data-id')!;
      CarController.backCar(id);
    }
  }

  static pageControlDispatcher(action:string, element: HTMLElement) {
    if (action === 'prev') {
      PageController.prevPage();
      GarageController.index();
    }
    if (action === 'next') {
      PageController.nextPage();
      GarageController.index();
    }
  }

  static raceControlDispatcher(action:string, element: HTMLElement) {
    if (action === 'race') {
      RaceController.race();
      GarageController.index();
    }
    if (action === 'reset') {
      RaceController.reset();
      GarageController.index();
    }
  }
}
