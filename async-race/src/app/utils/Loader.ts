import config from '../config';
import { CarType } from '../types';

export default class Loader {
  static async getAllCars() {
    let carsArray: Array<CarType> = [];
    const response = await fetch(config.garageUrl);
    if (response.ok) {
      carsArray = await response.json();
    } else {
      alert(`Ошибка HTTP: ${response.status}`);
    }
    return carsArray;
  }
}
