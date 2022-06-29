import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  news;

  sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: any) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: any) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
