import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IApp } from '../type/interfaces';
import { NewsSourcesType, NewsDataType } from '../type/type';

class App implements IApp {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const container = document
      .querySelector('.sources');
    const tooltip = document
      .querySelector('.tooltip');
    container!.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (target.nodeName === 'DIV' && target.classList.contains('source__item')) {
        const desc = `${target.dataset.sourceDesc}`;
         tooltip!.classList.remove('hidden');
        tooltip!.textContent = desc;
      }
    });
   container!.addEventListener('mouseout', (e) => {
     const target = e.target as HTMLElement;
     if (target.nodeName === 'DIV' && target.classList.contains('source__item')) {
       tooltip!.classList.add('hidden');
         tooltip!.textContent = '';
     }
   });
    container!
      .addEventListener('click', (e) => this.controller.getNews(e, (data?: NewsDataType) => this.view.drawNews(data!)));
    this.controller.getSources((data?: NewsSourcesType) => this.view.drawSources(data!));
  }
}

export default App;
