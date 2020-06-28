import React from 'react';
import { Provider } from 'react-redux';
import ContentPage from './src/components/ContentPage/ContentPage';
import { configureStore } from './store/store';

const store = configureStore();

export default App = () => {
  return (
    <>
      <Provider store={store}>
        <ContentPage />
      </Provider>
    </>
  );
};
