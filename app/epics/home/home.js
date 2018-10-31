import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  HOME_PAGE_REQUEST,
  receiveHomePage,
  failedHomeRequest
} from 'actions/home/home';

const requests = [];
let homeSet = [];

/**
 * fetchStations
 * @return {Object}
 */
export function fetchStations (action$, state$, { getHomeData }) {
  const filters = {
    params: apiFilters.home
  };

  return action$.ofType(HOME_PAGE_REQUEST)
    .pipe(
      switchMap(() =>
        Observable
          .pipe(
            from(getHomeData('https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanMetroStation&radius=1600&lat=51.509865&lon=-0.118092')),
            map(response => receiveHomePage(response)),
            catchError(error => of(failedHomeRequest(error)))
          )
      )
    )
}
