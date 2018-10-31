import React from 'react';
import 'shared/polyfill/polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getUserLocaleCookie } from 'shared/utils/cookie-jar/cookie-jar';
import { importImages } from 'shared/utils/images/images';

import configureStore, { epicMiddleware } from 'store';
import rootEpic from 'epics';
import AppContainer from 'containers/app-container/app-container';
import ScrollToTop from 'components/scroll-to-top/scroll-to-top';

import 'index.global.scss';

/* imports all the svgs inside the client/assets/svg/icons folder */
importImages(require.context('assets/svg/icons', false, /\.(png|jpe?g|svg)$/));

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
