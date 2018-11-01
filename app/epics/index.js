import { combineEpics } from 'redux-observable';

import fetchHomePage from 'epics/home/home';

export default combineEpics(
  fetchHomePage
);
