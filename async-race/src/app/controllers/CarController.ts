import { CarType } from '../types';

export default class CarController {
  static async index(car:CarType) {
    console.log('CarController => index', car);
  }
}
