// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchCoursesSuccess,
  fetchCoursesFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  addCourseSuccess,
  addCourseFailure,
  updateCourseSuccess,
  updateCourseFailure,
  FETCH_COURSES_REQUEST,
  DELETE_COURSE_REQUEST,
  ADD_COURSE_REQUEST,
  UPDATE_COURSE_REQUEST,
} from './actions';

function* fetchCoursesSaga() {
  try {
    const response = yield call(fetch, 'https://66fe07bc699369308956d365.mockapi.io/course');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = yield response.json();
    yield put(fetchCoursesSuccess(data));
  } catch (error) {
    yield put(fetchCoursesFailure(error.message));
  }
}

function* deleteCourseSaga(action) {
  try {
    const response = yield call(fetch, `https://66fe07bc699369308956d365.mockapi.io/course/${action.payload}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    yield put(deleteCourseSuccess(action.payload));
  } catch (error) {
    yield put(deleteCourseFailure(error.message));
  }
}

function* addCourseSaga(action) {
  try {
    const response = yield call(fetch, 'https://66fe07bc699369308956d365.mockapi.io/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: action.payload.title }),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = yield response.json();
    yield put(addCourseSuccess(data));
  } catch (error) {
    yield put(addCourseFailure(error.message));
  }
}

function* updateCourseSaga(action) {
  try {
    const response = yield call(fetch, `https://66fe07bc699369308956d365.mockapi.io/course/${action.payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: action.payload.title }),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = yield response.json();
    yield put(updateCourseSuccess(data));
  } catch (error) {
    yield put(updateCourseFailure(error.message));
  }
}

export function* watchFetchCourses() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCoursesSaga);
}

export function* watchDeleteCourse() {
  yield takeLatest(DELETE_COURSE_REQUEST, deleteCourseSaga);
}

export function* watchAddCourse() {
  yield takeLatest(ADD_COURSE_REQUEST, addCourseSaga);
}

export function* watchUpdateCourse() {
  yield takeLatest(UPDATE_COURSE_REQUEST, updateCourseSaga);
}
