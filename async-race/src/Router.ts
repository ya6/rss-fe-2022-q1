import Dom from './Dom';

export default class Router {
  static route(routeComponent: HTMLElement) {
    const app = document.querySelector('.page-container') as HTMLElement;
    if (app !== null) {
      Dom.delAllChildren(app);
      Dom.appendElemToDOM(app, routeComponent);
    }
  }
}
