import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE,
  REQUEST_HOME_ITEMS,
  RECEIVE_HOME_ITEMS,
  FAILED_HOME_ITEMS_REQUEST
} from 'client/actions/home/home';
import homeReducer, { defaultState } from 'client/reducers/home/home';
import fixture from './home.fixture';

describe('Reducers', () => {
  describe('Home Reducers', () => {
    it('should export the home reducer', () => {
      expect(homeReducer).toBeDefined();
    });

    it('should export a function', () => {
      expect(typeof homeReducer).toBe('function');
    });

    describe('Unrecognised action types', () => {
      it('should return the default state', () => {
        const result = homeReducer(defaultState, 'SOME_NONEXISTENT_ACTION_TYPE');
        expect(result).toEqual(defaultState);
      });
    });

    describe('HOME_PAGE_REQUEST', () => {
      it('should set the correct state', () => {
        const action = {
          type: HOME_PAGE_REQUEST
        };
        const expectedState = {
          isFetching: true
        };
        const result = homeReducer(defaultState, action);
        expect(result).toEqual(expect.objectContaining(expectedState));
      });
    });

    describe('HOME_PAGE_SUCCESS', () => {
      it('should set the correct state', () => {
        const payload = fixture;
        const action = {
          type: HOME_PAGE_SUCCESS,
          payload
        };
        const expectedState = {
          isFetching: false,
          homeData: payload
        };
        const result = homeReducer(defaultState, action);
        expect(result).toEqual(expect.objectContaining(expectedState));
      });
    });

    describe('HOME_PAGE_FAILURE', () => {
      it('should set the correct state', () => {
        const error = 'All right, we\'ll call it a draw.';
        const action = {
          type: HOME_PAGE_FAILURE,
          error
        };
        const expectedState = {
          isFetching: false,
          error
        };
        const result = homeReducer(defaultState, action);
        expect(result).toEqual(expect.objectContaining(expectedState));
      });
    });
  });
});
