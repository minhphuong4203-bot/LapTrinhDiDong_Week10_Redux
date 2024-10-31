// rootReducer.js
import { combineReducers } from 'redux';
import courseReducer from './reducers'; // Ensure the path is correct

const rootReducer = combineReducers({
  courses: courseReducer,
  // Add other reducers here if needed
});

export default rootReducer;