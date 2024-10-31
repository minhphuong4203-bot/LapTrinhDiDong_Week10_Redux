// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Đảm bảo đường dẫn đúng
import { watchFetchCourses, watchDeleteCourse, watchAddCourse } from './sagas'; // Đảm bảo đường dẫn đúng

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchCourses);
sagaMiddleware.run(watchDeleteCourse);
sagaMiddleware.run(watchAddCourse); // Thêm saga cho hành động thêm khóa học

export default store;