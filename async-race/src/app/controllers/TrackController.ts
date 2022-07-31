import config from '../config';
import View from '../View';

export default class TrackController {
  static async index() {
    console.log('TopScoresController => index');
    // const cars = await Loader.getAllCars();
    // View.topScores(cars);
    const track = Math.trunc((window.innerHeight - config.header) / config.tracks);
    const trackBottom = Math.trunc(track / (30));
    const trackTop = track / 3;
    for (let index = 0; index < config.tracks; index += 1) {
      View.carTrack(track, trackTop, trackBottom);
    }
  }
}
