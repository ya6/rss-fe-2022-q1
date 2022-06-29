import AppLoader from './appLoader';

enum EndpointEnum {
  Sources = 'sources',
  Everything = 'everything',

}

interface IAppController {
  getSources: (callback: any) => void
  getNews: (e: Event, callback: any) => void
}

class AppController extends AppLoader implements IAppController {
  getSources(callback: any) {
    super.getResp(
      {
        endpoint: EndpointEnum.Sources,
      },
      callback,
    );
  }

  getNews(e: Event, callback: any) {
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
