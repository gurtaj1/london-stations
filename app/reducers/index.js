import { combineReducers } from 'redux';

import home from 'client/reducers/home/home';

const rootReducer = combineReducers({
  home
});

export default rootReducer;
