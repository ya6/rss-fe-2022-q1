import { CarType } from '../types';
import View from '../View';

export default class CarController {
  static index(parent: HTMLElement, car:CarType, height: number) {
    console.log('CarController => index');
    View.car(parent, height);
  }
}
