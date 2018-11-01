import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore, { epicMiddleware } from 'store';
import rootEpic from 'epics';
import AppContainer from 'containers/app-container/app-container';

import 'index.global.scss';

const store = configureStore({
  ...window.__initialData__
});
epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
