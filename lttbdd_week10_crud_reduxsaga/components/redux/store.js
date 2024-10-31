// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Đảm bảo đường dẫn đúng
import { watchFetchCourses, watchDeleteCourse } from './sagas'; // Đảm bảo đường dẫn đúng

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchCourses);
sagaMiddleware.run(watchDeleteCourse);

export default store;