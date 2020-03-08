import React, { lazy, useContext, Suspense } from 'react';
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { toggleFavAction } from './Actions';


const EpisodeList = lazy<any>(() => import('./EpisodeList'));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    favorites: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    episodes: state.favorites
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='episode-layout'>
        <EpisodeList {...props} />
      </div>
    </Suspense>
  )
}

export default FavPage;