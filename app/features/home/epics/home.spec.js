import { combineEpics, ActionsObservable } from 'redux-observable';
import { of, throwError } from 'rxjs';
import createMockStore from 'shared/helpers/testing/reduxObservableHelpers';

import {
  requestHomePage,
  receiveHomePage,
  failedHomeRequest
} from 'features/home/actions/home';
import fetchHomePage from 'features/home/epics/home';
import ApiService from 'shared/services/api-service/api-service';

describe('features.home', () => {
  describe('home epics', () => {
    const homeData = {
      data: {
        stopPoints: [
          {
            commonName: 'station-name',
            lineModeGroups: []
          }
        ]
      }
    };
    ApiService.get = jest.fn().mockReturnValue(
      of(homeData)
    );
    const rootEpic = combineEpics(fetchHomePage);
    const epicMiddlewareDependencies = {
      dependencies: {
        get: ApiService.get
      }
    };

    describe('fetchHomePage', () => {
      it('should call ApiService.get once when it receives a HOME_PAGE_REQUEST action', async () => {
        const store = createMockStore(rootEpic, {}, epicMiddlewareDependencies);
        const action$ = ActionsObservable
          .of(requestHomePage());
        const epic$ = fetchHomePage(action$, store, epicMiddlewareDependencies.dependencies);
        await epic$.toPromise();

        expect(ApiService.get).toHaveBeenCalled();
        expect(ApiService.get.mock.calls).toHaveLength(1);
      });

      it('should dispatch requestHomePage() action when a response is received', async () => {
        const store = createMockStore(rootEpic, {}, epicMiddlewareDependencies);
        const action$ = ActionsObservable
          .of(requestHomePage());
        const expectedOutputActions = receiveHomePage(homeData);
        const epic$ = fetchHomePage(action$, store, epicMiddlewareDependencies.dependencies);
        const result = await epic$.toPromise();

        expect(result).toEqual(expectedOutputActions);
      });

      it('should dispatch failedHomeRequest() action when an error is received from the api call', async () => {
        const error = Error('Network error');
        ApiService.get = jest.fn().mockReturnValue(
          throwError(error)
        );
        const epicMiddlewareDependenciesUpdated = {
          dependencies: {
            get: ApiService.get
          }
        };
        const store = createMockStore(rootEpic, {}, epicMiddlewareDependenciesUpdated);
        const action$ = ActionsObservable
          .of(requestHomePage());
        const expectedOutputActions = failedHomeRequest(error);
        const epic$ = fetchHomePage(action$, store, epicMiddlewareDependenciesUpdated.dependencies);
        const result = await epic$.toPromise();

        expect(result).toEqual(expectedOutputActions);
      });
    });
  });
});
