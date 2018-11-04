import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';

const createMockStore = (rootEpic, initialState = {}, epicMiddlewareDependencies = {}) => {
  const epicMiddleware = createEpicMiddleware(epicMiddlewareDependencies);
  const mockStore = configureMockStore([epicMiddleware]);
  const store = mockStore(initialState);
  epicMiddleware.run(rootEpic);

  return store;
};

export default createMockStore;
