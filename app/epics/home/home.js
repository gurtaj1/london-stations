import { Observable, of, from, forkJoin } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

import { convertObjectToQueryString } from 'client/shared/utils/urls/urls';
import { slugify } from 'client/shared/utils/string/string';
import { apiFilters } from 'client/shared/constants/api-filters';

import SetFactory from 'client/shared/factories/set-factory/set-factory';
import EntityFactory from 'client/shared/factories/entity-factory/entity-factory';

import {
  HOME_PAGE_REQUEST,
  receiveHomePage,
  failedHomeRequest
} from 'client/actions/home/home';

const requests = [];
let homeSet = [];

/**
 * fetchHomePage
 * @return {Object}
 */
export function fetchHomePage (action$) {
  const filters = {
    params: apiFilters.home
  };

  return action$.ofType(HOME_PAGE_REQUEST)
    .pipe(
      switchMap(() =>
        Observable
          .create(observer => {
            homeSet = [];

            SetFactory.getSetBySlug(filters)
              .then(data => observer.next(data))
              .catch(error => observer.error(error));
          })
          .pipe(
            mergeMap(response => {
              homeSet = response.data.objects[0];

              return [
                requestHomeItems(response.data.objects[0].items),
                receiveHomePage(response)
              ];
            }),
            catchError(error => of(failedHomeRequest(error)))
          )
      )
    )
}
