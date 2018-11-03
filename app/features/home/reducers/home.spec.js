import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from 'features/home/actions/home';
import homeReducer, { defaultState } from 'features/home/reducers/home';
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
          homeData: [
            {
              name: 'station-name',
              lines: [
                'circle',
                'district'
              ]
            }
          ]
        };
        const result = homeReducer(defaultState, action);
        expect(result).toEqual(expectedState);
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
