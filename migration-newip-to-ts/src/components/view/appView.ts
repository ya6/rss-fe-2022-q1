import News from './news/news';
import Sources from './sources/sources';

type NewsDataType = {
 status: string, totalResults: number, articles: object[] }

type NewsSourcesType = {
 status: string, sources: object[] }

interface IAppView {
  drawNews: (data: NewsDataType) => void
  drawSources: (data: NewsSourcesType) => void
}

export class AppView implements IAppView {
  private readonly news: News;
  private readonly sources: Sources;

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
