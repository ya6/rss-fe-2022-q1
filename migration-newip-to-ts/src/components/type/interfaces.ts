import { EndpointEnum, OptionsType, NewsSourcesType } from './type';
// app.ts
export interface IApp {
  start: () => void
}

// loader.ts
export interface NewsDataType {
 status: string, totalResults: number, articles: object[] }

export interface ILoader {
  getResp: ({ endpoint, options }: {
    endpoint: EndpointEnum;
    options: OptionsType;
  }, callback?: () => void) => void
  errorHandler: (res: Response) => Response
  makeUrl: (options: OptionsType, endpoint: EndpointEnum) => string
  load: (method: string, endpoint: EndpointEnum, callback: ()=>void, options?: OptionsType) => void

}

export interface IAppController {
  getSources: (callback: (data?: NewsSourcesType) => void) => void
  getNews: (e: Event, callback: () => void) => void
}

export interface IAppView {
  drawNews: (data: NewsDataType) => void
  drawSources: (data: NewsSourcesType) => void
}

export interface INews {
  draw(data: object[]): void
}

export interface NewsType {
author: string,
content1: string;
description: string,
publishedAt: string,
source: { id: string, name: string },
title: string,
url: string
urlToImage: string
}

export interface TheNewsType {
id: string,
name: string,
description: string,
url: string,
category: string,
language: string,
country: string,
}

export interface ISources {
 draw: (data: Array<object>) => void // Generic
}
