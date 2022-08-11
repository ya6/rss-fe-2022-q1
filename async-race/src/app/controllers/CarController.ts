import { AddCarType, CarType } from '../types';
import Loader from '../utils/Loader';
import View from '../View';
import { carNames, carColors } from '../data';
import random from '../utils/random';
import PageController from './PageController';
import getTranslatePosition from '../utils/getTanslatePosition';
import Storage from '../utils/Storage';
import WinnersLoader from '../utils/WinnersLoader';

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
    const time = resp.distance / (resp.velocity * 5000);
    const car = document.querySelector(`[data-car="${id}"]`) as HTMLElement;

    const handler = async (e:Event) => {
      const element = e.target as HTMLElement;
      const winnerID = element.getAttribute('data-car');
      const currentWinner = Storage.loadFromStorage('currentWinner');
      const winners = Storage.loadFromStorage('winners');
      if (winnerID) {
        if (currentWinner[1] === 0 && currentWinner[2] === 1) {
          const winnerTime = Math.floor(time * 100) / 100;
          Storage.saveToStorage('currentWinner', [winnerID, winnerTime, 0]);

          if (winnerID in winners) {
            winners[winnerID] = winners[winnerID] > winnerTime
              ? winnerTime : winners[winnerID];

            const winner = await WinnersLoader.getWinner(String(winnerID));
            await WinnersLoader.updateWinner(
              String(winnerID),
              { wins: winner.wins + 1, time: winnerTime },
            );
          } else {
            winners[winnerID] = winnerTime;
            await WinnersLoader.createWinner({ wins: 1, time: winnerTime });
          }
          alert(winnerTime);
          console.log(winners);

          Storage.saveToStorage('winners', winners);
        }
        //
      }

      element!.removeEventListener('transitionend', handler);
    };

    car.addEventListener('transitionend', handler);

    const way = document.body.clientWidth;
    car.style.transform = `translateX(${way - 250}px)`;
    car.style.transition = `all ease-in ${time}s`;
  }

  static async stopCar(id: string) {
    const car = document.querySelector(`[data-car="${id}"]`) as HTMLElement;
    const resp = await Loader.stopCar(id);
    if (resp.velocity === 0) {
      const currentX = getTranslatePosition(car);
      car.style.transform = `translateX(${currentX}px)`;

      setTimeout(() => {
        car.style.transform = `translateX(${0}px)`;
        car.style.transition = `all ease-in ${1}s`;
      }, 1000);
    }
  }
}
