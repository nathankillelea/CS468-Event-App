import { combineReducers } from 'redux';

import FavoriteReducer from './FavoriteReducer.js';
/**
 * The AppReducer combines all of the other reducers together.
 */
const AppReducer = combineReducers({
    favorite: FavoriteReducer,
});

export default AppReducer;