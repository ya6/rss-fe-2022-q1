import './news.css';

class News {
  draw(data: any) {
    const news = data.length >= 10 ? data.filter((_item: any, idx: number) => idx < 10) : data;

    const fragment = document.createDocumentFragment() as DocumentFragment;
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: any, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

     
      // newsClone.querySelector('.news__meta-photo')!.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      newsClone.querySelector<HTMLElement>('.news__meta-photo')!.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
      newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsClone.querySelector('.news__description-title')!.textContent = item.title;
      newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
      newsClone.querySelector('.news__description-content')!.textContent = item.description;
      newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector('.news')!.innerHTML = ''; // fix
    document.querySelector('.news')!.appendChild(fragment); // fix
  }
}

export default News;
