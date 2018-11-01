import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from 'actions/home/home';

export const defaultState = {
  isFetching: false,
  homeData: undefined
};

const refineStationData = data => {
  const stations = data.data.stopPoints;
  const stationsRefined = stations.map(station => {
    const lines = station.lineModeGroups
      .filter(lineModeGroup => lineModeGroup.modeName === 'tube')
      .map(lineModeGroup => lineModeGroup.lineIdentifier.map(line => line));

    return {
      name: station.commonName,
      lines: lines[0]
    };
  });

  return stationsRefined;
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
        isFetching: false,
        homeData: refineStationData(action.payload)
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
