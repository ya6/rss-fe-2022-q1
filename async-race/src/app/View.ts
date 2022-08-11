import Dom from './utils/Dom';
import appComponent from './components/appComponent';
import garage from './components/garageComponent';
import topScores from './components/topScoresComponent';
import carTrackComponent from './components/TrackComponent';
import carComponent from './components/carComponent';
import { CarType, PageDataType, WinnersType } from './types';
import winnersRowComp from './components/winnersRowComponent';

export default class View {
  static home() {
    // console.log('View => home');
    Dom.appendElemToDOM(document.body, appComponent);
  }

  static garage(pageData: PageDataType, cars: Array<CarType>) {
    // console.log('View => garage');

    const pageContainer = document.querySelector('.page-container') as HTMLElement;
    if (pageContainer !== null) {
      Dom.appendElemToDOM(pageContainer, garage(pageData));
    }
  }

  static topScores(winners: Array<WinnersType>) {
    // console.log('View => topScores');
    const pageContainer = document.querySelector('.page-container') as HTMLElement;
    if (pageContainer !== null) {
      Dom.appendElemToDOM(pageContainer, topScores(winners));
    }
  }

  static carTrack(car: CarType, height: number, top: number, bottom: number, index: number) {
    // console.log('View => carTrack', height, top, bottom);
    const garageContainer = document.querySelector('.garage') as HTMLElement;
    if (garageContainer !== null) {
      Dom.appendFromStringToDom(
        garageContainer,
        carTrackComponent(car, height, top, bottom, index),
      );
    }
  }

  static car(parent: HTMLElement, car: CarType, height: number) {
    // console.log('View => car', car);
    if (parent !== null) {
      Dom.appendFromStringToDom(parent, carComponent(car, height));
    }
  }

  static winnersRow(parent: HTMLElement, winner: WinnersType) {
    console.log('View ->winnersRow-->', parent, winner);

    if (parent !== null) {
      Dom.appendElemToDOM(parent, winnersRowComp(winner));
    }
  }
}
