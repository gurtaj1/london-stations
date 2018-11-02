import { combineEpics } from 'redux-observable';

import fetchHomePage from 'features/home/epics/home';

export default combineEpics(
  fetchHomePage
);
