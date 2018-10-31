import React from 'react';
import 'client/shared/polyfill/polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getUserLocaleCookie } from 'client/shared/utils/cookie-jar/cookie-jar';
import { importImages } from 'client/shared/utils/images/images';

import configureStore, { epicMiddleware } from 'client/store';
import rootEpic from 'client/epics';
import AppContainer from 'client/containers/app-container/app-container';
import ScrollToTop from 'client/components/scroll-to-top/scroll-to-top';

import 'client/index.global.scss';

/* imports all the svgs inside the client/assets/svg/icons folder */
importImages(require.context('client/assets/svg/icons', false, /\.(png|jpe?g|svg)$/));

const store = configureStore({
  ...window.__initialData__
});
epicMiddleware.run(rootEpic);

const locale = getUserLocaleCookie();

render(
  <Provider store={store}>
    <BrowserRouter basename={locale}>
      <ScrollToTop>
        <AppContainer />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
