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
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: NewsDataType) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: NewsSourcesType) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
