import config from '../config';
import Dom from '../utils/Dom';
import View from '../View';
import CarController from './CarController';

export default class TrackController {
  static index() {
    console.log('TopScoresController => index');
    const track = Math.trunc((window.innerHeight - config.header) / config.tracks);
    const trackBottom = Math.trunc(track / (30));
    const trackTop = track / 3;

    Dom.clearGarage();

    for (let index = 0; index < config.tracks; index += 1) {
      console.log();
      View.carTrack(track, trackTop, trackBottom, index);
      const trackContainer = document.querySelector(`[data-track="${index}"]`) as HTMLElement;
      console.log(trackContainer);
      if (trackContainer !== null) {
        CarController.index(trackContainer, { name: 'tesla', color: 'red', id: 1 }, 12);
      }
    }
  }
}
