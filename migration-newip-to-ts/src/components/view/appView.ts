import News from './news/news';
import Sources from './sources/sources';
import { NewsDataType, NewsSourcesType } from '../type/type';
import { IAppView } from '../type/interfaces';

export class AppView implements IAppView {
  private readonly news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: NewsDataType) {
    const values: object[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: NewsSourcesType) {
    const values: object[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
