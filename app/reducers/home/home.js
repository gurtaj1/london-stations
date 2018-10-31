import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE,
} from 'client/actions/home/home';

export const defaultState = {
  isFetching: false,
  homeData: undefined
};

/**
 * Reducer for updating the Home Page
 * @param  {Object} state
 * @param  {String} action
 * @return {Object}
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case HOME_PAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case HOME_PAGE_SUCCESS:
      return Object.assign({}, state, {
        homeData: action.payload
      });
    case HOME_PAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}
