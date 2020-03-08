/**
 /---------------------------------
 /All the interfaces for Typescript
 /---------------------------------
 */

export interface IState {
  episodes: Array<IEpisode>
  favorites: Array<any>
}

export interface IAction {
  type: string,
  payload: any
}

export interface IEpisode {
  id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  airdate: string,
  airtime: string,
  airstamp: string,
  runtime: number,
  image: { medium: string, original: string }
  summary: string
}

export interface IEpisodeProps {
  episodes: IEpisode[],
  toggleFavAction: (episode: IEpisode) => IAction,
  favorites: Array<IEpisode>
}