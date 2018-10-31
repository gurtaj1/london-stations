import { combineEpics } from 'redux-observable';

import { fetchHomePage } from 'client/epics/home/home';

export default combineEpics(
  fetchHomePage,
);
