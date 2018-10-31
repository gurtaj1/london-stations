import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApiService from 'shared/services/api-service/api-service';

import { IS_BROWSER } from 'shared/helpers/environments-helper/environments-helper';
import rootReducer from 'reducers';

const history = IS_BROWSER ? createBrowserHistory() : createMemoryHistory();

/**
 * Injecting Dependencies Into Epics
 * https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html
 */
export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    getHomeData: ApiService.get
  }
});

const middleware = () => composeWithDevTools(
  applyMiddleware(epicMiddleware, routerMiddleware(history))
);

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  middleware()
);

export default configureStore;
