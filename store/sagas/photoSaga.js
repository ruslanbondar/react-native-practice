import {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosFailure,
} from '../actions/photos';

import axios from 'axios';

export function* getPhotos() {
  yield getPhotosRequest();

  try {
    const data = axios.get(
      'https://jsonplaceholder.typicode.com/photos?_limit=10'
    );
    yield getPhotosSuccess(data);
  } catch {
    yield getPhotosFailure('Error 403');
  }
}
