import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApiService from 'client/shared/services/api-service/api-service';
import EntityFactory from 'client/shared/factories/entity-factory/entity-factory';

import { IS_BROWSER } from 'client/shared/helpers/environments-helper/environments-helper';
import rootReducer from 'client/reducers';

const history = IS_BROWSER ? createBrowserHistory() : createMemoryHistory();

/**
 * Injecting Dependencies Into Epics
 * https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html
 */
export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    socialAuthenticate: ApiService.post,
    syncSubscriptions: ApiService.get,
    getUsersPlan: ApiService.get,
    getUserData: ApiService.get,
    getEntityByUrl: EntityFactory.getEntityByUrl
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
