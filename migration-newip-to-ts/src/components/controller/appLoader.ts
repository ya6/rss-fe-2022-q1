import Loader from './loader';

type OptionsType = {
    [key: string]: string
}

class AppLoader extends Loader<string, OptionsType> {
  constructor() {
    // super('', {
    super('https://newsapi.org/v2/', {
    // super('https://nodenews.herokuapp.com/', {
      apiKey: 'cd32042d4b8845fbba3c53ed2d341562', // get yours key https://newsapi.org/
    });
  }
}

export default AppLoader;
