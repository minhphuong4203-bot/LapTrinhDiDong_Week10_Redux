// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCoursesSuccess, fetchCoursesFailure, FETCH_COURSES_REQUEST } from './actions';

function* fetchCoursesSaga() {
  try {
    const response = yield call(fetch, 'https://66fe07bc699369308956d365.mockapi.io/course');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield response.json();
    yield put(fetchCoursesSuccess(data));
  } catch (error) {
    yield put(fetchCoursesFailure(error.message));
  }
}

export function* watchFetchCourses() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCoursesSaga);
}