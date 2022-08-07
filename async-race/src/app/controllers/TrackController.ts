import config from '../config';
import Dom from '../utils/Dom';
import Loader from '../utils/Loader';
import View from '../View';
import CarController from './CarController';

export default class TrackController {
  static async index() {
    console.log('TopScoresController => index');
    const track = Math.trunc((window.innerHeight - config.header) / config.tracks);
    const trackBottom = Math.trunc(track / (30));
    const trackTop = track / 3;

    Dom.clearGarage();
    const cars = await Loader.getAllCars();
    console.log('cars', cars);

    for (let index = 0; index < config.tracks; index += 1) {
      View.carTrack(cars[index], track, trackTop, trackBottom, index);
      const trackContainer = document.querySelector(`[data-track="${index}"]`) as HTMLElement;

      if (trackContainer !== null) {
        // console.log(cars[index] || null);
        // CarController.index(trackContainer, { name: 'tesla', color: 'red', id: 1 }, track / 2);
        if (cars[index]) {
          CarController.index(trackContainer, cars[index], track / 2);
        }
      }
    }
  }
}
