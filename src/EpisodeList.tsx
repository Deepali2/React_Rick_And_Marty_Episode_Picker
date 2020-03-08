import React from 'react';

import { IEpisode } from './interfaces';

export default function EpisodeList(props: any): JSX.Element[] { // we could also do Array<JSX.Element> instead of JSX.Element[]
  const { episodes, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          Season: {episode.season} Number: {episode.number}
          <button
            type='button'
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'unfav' : 'fav'}
          </button>
        </section>
      </section>
    )
  })
}
