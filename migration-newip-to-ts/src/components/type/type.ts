// app.ts
export type NewsSourcesType = {
 status: string, sources: object[] }

export type NewsDataType = {
 status: string, totalResults: number, articles: object[] }

// loader.ts
export enum EndpointEnum {
  Sources = 'sources',
  Everything = 'everything',
  Empty = '',

}

export type OptionsType = {
    [key: string]: string
}

export interface IAppController {
  getSources: (callback: (data?: NewsSourcesType) => void) => void
  getNews: (e: Event, callback: () => void) => void
}
