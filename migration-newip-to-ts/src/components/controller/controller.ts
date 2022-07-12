import AppLoader from './appLoader';
import { EndpointEnum, NewsSourcesType } from '../type/type';
import { IAppController } from '../type/interfaces';

class AppController extends AppLoader implements IAppController {
  public getSources(callback: (data?: NewsSourcesType) => void) {
    super.getResp(
      {
        endpoint: EndpointEnum.Sources,
      },
      callback,
    );
  }

  public getNews(e: Event, callback: () => void): void {
    let target = e.target as HTMLElement;
    const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

    while (target !== newsContainer && target !== null && newsContainer !== null) {
      if (target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId!);
          super.getResp(
            {
              endpoint: EndpointEnum.Everything,
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
