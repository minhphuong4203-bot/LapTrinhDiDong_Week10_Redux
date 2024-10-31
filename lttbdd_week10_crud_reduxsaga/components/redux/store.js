// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import { watchFetchCourses, watchDeleteCourse, watchAddCourse, watchUpdateCourse } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchCourses);
sagaMiddleware.run(watchDeleteCourse);
sagaMiddleware.run(watchAddCourse);
sagaMiddleware.run(watchUpdateCourse);

export default store;
