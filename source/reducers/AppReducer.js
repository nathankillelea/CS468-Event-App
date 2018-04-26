import { combineReducers } from 'redux';

import DealReducer from './DealReducer.js';

/**
 * The AppReducer combines all of the other reducers together.
 */
const AppReducer = combineReducers({
    deal: DealReducer,
});

export default AppReducer;