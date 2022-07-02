enum EndpointEnum {
  Sources = 'sources',
  Everything = 'everything',
  Empty = '',

}

type OptionsType = {
    [key: string]: string
}

type NewsDataType = {
 status: string, totalResults: number, articles: object[] }

interface ILoader {
  getResp: ({ endpoint, options }: {
    endpoint: EndpointEnum;
    options: {};
  }, callback?: () => void) => void
  errorHandler: (res: Response) => any
  makeUrl: (options: {}, endpoint: EndpointEnum) => string
  load: (method: string, endpoint: EndpointEnum, callback: ()=>void, options?: {}) => void

}

class Loader implements ILoader {
  private baseLink: string;
  private options: {};

  constructor(baseLink: string, options: {}) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint = EndpointEnum.Empty, options = {} },
    callback = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) { console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`); }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: OptionsType, endpoint: EndpointEnum): string {
    const urlOptions: OptionsType = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      const value = urlOptions[key];
      url += `${key}=${value}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: string,
    endpoint: EndpointEnum,
    callback: (data?: NewsDataType)=>void,
    options = {},
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => {
        const rez = res.json();

        return rez;
      })
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
