// rootReducer.js
import { combineReducers } from 'redux';
import courseReducer from './reducers';

const rootReducer = combineReducers({
  courses: courseReducer,
});

export default rootReducer;
