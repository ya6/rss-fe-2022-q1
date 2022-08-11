import Storage from '../utils/Storage';
import CarController from './CarController';

export default class RaceController {
  static async race() {
    const currentWinner = Storage.loadFromStorage('currentWinner');
    if (currentWinner[2] === 1) {
      return;
    }
    Storage.saveToStorage('currentWinner', [0, 0, 1]);
    const cars = [...document.querySelectorAll('[data-car]')];
    const ids = cars.map((el) => el.getAttribute('data-car'));
    // eslint-disable-next-line no-restricted-syntax
    for await (const id of ids) {
      CarController.runCar(String(id));
    }
  }

  static async reset() {
    const cars = [...document.querySelectorAll('[data-car]')];
    const ids = cars.map((el) => el.getAttribute('data-car'));
    // eslint-disable-next-line no-restricted-syntax
    for await (const id of ids) {
      CarController.stopCar(String(id));
    }
    Storage.saveToStorage('currentWinner', [0, 0, 0]);
  }
}
