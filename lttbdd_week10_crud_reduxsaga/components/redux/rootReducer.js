// rootReducer.js
import { combineReducers } from 'redux';
import courseReducer from './reducers'; // Đảm bảo đường dẫn đúng

const rootReducer = combineReducers({
  courses: courseReducer,
});

export default rootReducer;