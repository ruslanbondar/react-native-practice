import { applyMiddleware, compose, createStore } from 'redux';
import photoReducer from './reducers/photoReducer';
import createSagaMiddleware from 'redux-saga';
import { getPhotos } from './sagas/photoSaga';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(photoReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(getPhotos);
  return store;
};
