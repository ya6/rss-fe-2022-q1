import AppController from '../controller/controller';
import { AppView } from '../view/appView';

type NewsSourcesType = {
 status: string, sources: object[] }

type NewsDataType = {
 status: string, totalResults: number, articles: object[] }

interface IApp {
  start: () => void
}

class App implements IApp {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    document
      .querySelector('.sources')!
      .addEventListener('click', (e) => this.controller.getNews(e, (data: NewsDataType) => this.view.drawNews(data)));
    this.controller.getSources((data: NewsSourcesType) => this.view.drawSources(data));
  }
}

export default App;
