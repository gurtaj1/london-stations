import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApiService from 'shared/services/api-service/api-service';

import rootReducer from 'root-reducer';

const history = createBrowserHistory();

/**
 * Injecting Dependencies Into Epics
 * https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html
 */
export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    get: ApiService.get
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
