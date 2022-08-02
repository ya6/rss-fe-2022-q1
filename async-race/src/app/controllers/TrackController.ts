import config from '../config';
import Dom from '../utils/Dom';
import View from '../View';

export default class TrackController {
  static index() {
    console.log('TopScoresController => index');
    const track = Math.trunc((window.innerHeight - config.header) / config.tracks);
    const trackBottom = Math.trunc(track / (30));
    const trackTop = track / 3;

    Dom.clearGarage();

    for (let index = 0; index < config.tracks; index += 1) {
      View.carTrack(track, trackTop, trackBottom);
    }
  }
}
