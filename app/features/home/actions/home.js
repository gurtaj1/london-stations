export const HOME_PAGE_REQUEST = 'HOME_PAGE_REQUEST';
export const HOME_PAGE_SUCCESS = 'HOME_PAGE_SUCCESS';
export const HOME_PAGE_FAILURE = 'HOME_PAGE_FAILURE';

/**
 * requestHomePage
 * @return {Object}
 */
export const requestHomePage = () => ({
  type: HOME_PAGE_REQUEST
});

/**
 * receiveHomePage
 * @returns {{type: string, set: Object}}
 */
export const receiveHomePage = response => ({
  type: HOME_PAGE_SUCCESS,
  payload: response
});

/**
 * failedHomeRequest
 * @returns {{type: string, set: Object}}
 */
export const failedHomeRequest = error => ({
  type: HOME_PAGE_FAILURE,
  error
});
