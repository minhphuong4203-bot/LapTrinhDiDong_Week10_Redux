// rootReducer.js
import { combineReducers } from 'redux';
import courseReducer from './reducers'; // Đảm bảo đường dẫn đúng

const rootReducer = combineReducers({
  courses: courseReducer,
  // Có thể thêm các reducer khác nếu cần
});

export default rootReducer;