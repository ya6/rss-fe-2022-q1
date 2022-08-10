import config from '../config';
import { AddCarType, CarType } from '../types';
import getCurrentPageCarsID from './getCurrentPageCarsID';

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

  static async getPageOfCars(page: number) {
    const cars = await Loader.getAllCars();
    const { firstCarNumber, lastCarNumber } = getCurrentPageCarsID(page);
    return cars.slice(firstCarNumber, lastCarNumber);
  }

  static async createCar(data: AddCarType) {
    const response = await fetch(config.garageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async updateCar(id: string, data: AddCarType) {
    const response = await fetch(`${config.garageUrl}${Number(id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async delCar(id: string) {
    const response = await fetch(`${config.garageUrl}${Number(id)}`, {
      method: 'DELETE',
    });
    return response.json();
  }

  static async runCar(id: string) {
    const response = await fetch(`${config.engineUrl}?id=${Number(id)}&status=started`, {
      method: 'PATCH',
    });
    return response.json();
  }

  static async stopCar(id: string) {
    const response = await fetch(`${config.engineUrl}?id=${Number(id)}&status=stopped`, {
      method: 'PATCH',
    });
    return response.json();
  }
}
