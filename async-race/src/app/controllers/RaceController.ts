import CarController from './CarController';

export default class RaceController {
  static async race() {
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
  }
}
