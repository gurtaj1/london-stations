import { combineReducers } from 'redux';

import home from 'features/home/reducers/home';

const rootReducer = combineReducers({
  home
});

export default rootReducer;
