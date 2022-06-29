enum EndpointEnum {
  Sources = 'sources',
  Everything = 'everything',
  Empty = '',

}

interface ILoader {
  getResp: ({ endpoint, options }: {
    endpoint: EndpointEnum;
    options: {};
  }, callback?: () => void) => void
  errorHandler: (res: Response) => any
  makeUrl: (options: {}, endpoint: EndpointEnum) => Request | string
  load: (method: string, endpoint: EndpointEnum, callback: any, options?: {}) => void

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
    console.log('loader -> getResp', 'endpoint', endpoint, 'options', options); // ya
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) { console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`); }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: any, endpoint: EndpointEnum): Request | string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: EndpointEnum, callback: any, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => {
        const rez = res.json();
        console.log('loader -> load', 'endpoint', endpoint, 'options', options, ' res.json()', rez); // ya
        return rez;
      })
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
