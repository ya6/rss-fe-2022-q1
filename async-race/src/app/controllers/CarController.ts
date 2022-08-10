import { AddCarType, CarType } from '../types';
import Loader from '../utils/Loader';
import View from '../View';
import { carNames, carColors } from '../data';
import random from '../utils/random';
import PageController from './PageController';

export default class CarController {
  static index(parent: HTMLElement, car:CarType, height: number) {
    // console.log('CarController => index', car);
    View.car(parent, car, height);
  }

  static createCar(car: AddCarType) {
    Loader.createCar(car);
    PageController.addCar();
  }

  static updateCar(id: string, data: AddCarType) {
    Loader.updateCar(id, data);
  }

  static delCar(id: string) {
    Loader.delCar(id);
    PageController.delCar();
  }

  static generateCars(val: number) {
    for (let index = 0; index < val; index += 1) {
      Loader.createCar({ name: carNames[random(0, 10)], color: carColors[random(0, 10)] });
      PageController.addCar();
    }
  }

  static async runCar(id: string) {
    const resp = await Loader.runCar(id);
    console.log(resp);

    const time = resp.distance / (resp.velocity * 1000);
    const car = document.querySelector(`[data-car="${id}"]`) as HTMLElement;
    const way = document.body.clientWidth;
    car.style.transform = `translateX(${way - 250}px)`;
    car.style.transition = `all ease-in ${time}s`;
  }

  static async backCar(id: string) {
    const car = document.querySelector(`[data-car="${id}"]`) as HTMLElement;
    car.style.transform = `translateX(${0}px)`;
    car.style.transition = `all ease-in ${0.5}s`;
  }
}
