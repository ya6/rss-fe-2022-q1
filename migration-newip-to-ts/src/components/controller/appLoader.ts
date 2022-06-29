import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    // super('https://newsapi.org/v2/', {
    super('https://nodenews.herokuapp.com/', {
      // super('', {
      apiKey: 'cd32042d4b8845fbba3c53ed2d341562', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
