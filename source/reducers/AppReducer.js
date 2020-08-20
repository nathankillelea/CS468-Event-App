import { combineReducers } from 'redux';

import DataReducer from './DataReducer.js';

/**
 * The AppReducer combines all of the other reducers together.
 */
const AppReducer = combineReducers({
  data: DataReducer,
});

export default AppReducer;