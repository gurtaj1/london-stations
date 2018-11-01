import configureMockStore from 'redux-mock-store';

import * as actions from './home';
import fixture from './home.fixture';

describe('Actions', () => {
  describe('Home Actions', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});

    afterEach(() => {
      store.clearActions();
    });

    describe('requestHomePage', () => {
      const expectedAction = {
        type: actions.HOME_PAGE_REQUEST
      };

      it('should return an expected action object', () => {
        const output = actions.requestHomePage();
        expect(output).toEqual(expectedAction);
      });

      it('should create an action, when dispatched to the state store', () => {
        store.dispatch(actions.requestHomePage());
        expect(store.getActions()).toEqual(expect.arrayContaining([expectedAction]));
      });
    });

    describe('receiveHomePage', () => {
      const { response } = fixture;
      const expectedAction = {
        type: actions.HOME_PAGE_SUCCESS,
        payload: response.data
      };

      it('should return an expected action object', () => {
        const output = actions.receiveHomePage(response);
        expect(output).toEqual(expectedAction);
      });

      it('should create an action, when dispatched to the state store', () => {
        store.dispatch(actions.receiveHomePage(response));
        expect(store.getActions()).toEqual(expect.arrayContaining([expectedAction]));
      });
    });

    describe('failedHomeRequest', () => {
      const error = 'Something went wrong.';
      const expectedAction = {
        type: actions.HOME_PAGE_FAILURE,
        error
      };

      it('should return an expected action object', () => {
        const output = actions.failedHomeRequest(error);
        expect(output).toEqual(expectedAction);
      });

      it('should create an action, when dispatched to the state store', () => {
        store.dispatch(actions.failedHomeRequest(error));
        expect(store.getActions()).toEqual(expect.arrayContaining([expectedAction]));
      });
    });
  });
});
