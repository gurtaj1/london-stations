import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  HOME_PAGE_REQUEST,
  receiveHomePage,
  failedHomeRequest
} from 'actions/home/home';

const fetchHomePage = (action$, store, { get }) => action$
  .ofType(HOME_PAGE_REQUEST)
  .pipe(
    switchMap(() =>
      from(get('https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanMetroStation&radius=1600&lat=51.509865&lon=-0.118092'))
        .pipe(
          map(response => receiveHomePage(response)),
          catchError(error => of(failedHomeRequest(error)))
        )
    )
  );

export default fetchHomePage;
