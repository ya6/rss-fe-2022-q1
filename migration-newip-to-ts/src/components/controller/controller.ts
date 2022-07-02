import AppLoader from './appLoader';

enum EndpointEnum {
  Sources = 'sources',
  Everything = 'everything',

}

type NewsSourcesType = {
 status: string, sources: object[] }

interface IAppController {
  getSources: (callback: (data?: NewsSourcesType) => void) => void
  getNews: (e: Event, callback: () => void) => void | undefined
}

class AppController extends AppLoader implements IAppController {
  getSources(callback: (data?: NewsSourcesType) => void) {
    super.getResp(
      {
        endpoint: EndpointEnum.Sources,
      },
      callback,
    );
  }

  getNews(e: Event, callback: () => void): void | undefined {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer && target !== null && newsContainer !== null) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
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
