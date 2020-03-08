import React, { useEffect, useContext, Suspense, lazy } from 'react';

import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';
import { IEpisodeProps } from './interfaces';

const EpisodeList = lazy<any>(() => import('./EpisodeList'));

const HomePage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <section className='episode-layout'>
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </>
  )
}

export default HomePage;