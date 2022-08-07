import config from '../config';
import { AddCarType, CarType } from '../types';

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

  static async addNewCar(data: AddCarType) {
    const response = await fetch(config.garageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
