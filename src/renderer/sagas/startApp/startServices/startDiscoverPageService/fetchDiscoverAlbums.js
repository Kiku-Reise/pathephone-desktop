import { put, call, take } from 'redux-saga/effects'

import normalizeCollectionAlbum from '~utils/normalizeCollectionAlbum'

import {
  systemDiscoverFetchSucceed,
  systemDiscoverFetchFailed
} from '~actions/system'

import { DISCOVER_FEED_LIMIT } from '~data/constants'

function * fetchDiscoverAlbums (apis, { payload }) {
  const {
    findAlbumsInCollection
  } = apis
  const params = { limit: DISCOVER_FEED_LIMIT, text: payload }
  const albumsSource = yield call(findAlbumsInCollection, params)
  try {
    while (true) {
      const { albums, error } = yield take(albumsSource)
      if (error) throw error
      const normalizedAlbums = albums.map(normalizeCollectionAlbum)
      yield put(systemDiscoverFetchSucceed(normalizedAlbums))
    }
  } catch (e) {
    console.error(e)
    yield put(systemDiscoverFetchFailed({ errorMessage: e.message }))
  }
}

export default fetchDiscoverAlbums