import { AddCarType, CarType } from '../types';
import Loader from '../utils/Loader';
import View from '../View';
import { carNames, carColors } from '../data';
import random from '../utils/random';

export default class CarController {
  static index(parent: HTMLElement, car:CarType, height: number) {
    console.log('CarController => index', car);
    View.car(parent, car, height);
  }

  static createCar(car: AddCarType) {
    Loader.createCar(car);
  }

  static updateCar(id: string, data: AddCarType) {
    Loader.updateCar(id, data);
  }

  static delCar(id: string) {
    Loader.delCar(id);
  }

  static generateCars(val: number) {
    for (let index = 0; index < val; index += 1) {
      Loader.createCar({ name: carNames[random(0, 10)], color: carColors[random(0, 10)] });
    }
  }
}
