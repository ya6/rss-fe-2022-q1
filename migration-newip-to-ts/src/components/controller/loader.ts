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
    options: OptionsType;
  }, callback?: () => void) => void
  errorHandler: (res: Response) => Response
  makeUrl: (options: OptionsType, endpoint: EndpointEnum) => string
  load: (method: string, endpoint: EndpointEnum, callback: ()=>void, options?: OptionsType) => void

}

class Loader implements ILoader {
  private baseLink: string;
  private options: OptionsType;

  constructor(baseLink: string, options: OptionsType) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint = EndpointEnum.Empty, options = {} },
    callback = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  public errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) { console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`); }
      throw Error(res.statusText);
    }

    return res;
  }

  public makeUrl(options: OptionsType, endpoint: EndpointEnum): string {
    const urlOptions: OptionsType = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      const value: string = urlOptions[key];
      url += `${key}=${value}&`;
    });

    return url.slice(0, -1);
  }

  public load(
    method: string,
    endpoint: EndpointEnum,
    callback: (data?: NewsDataType)=>void,
    options = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => {
        const rez: Promise<NewsDataType> = res.json(); // Generic Promise

        return rez;
      })
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
