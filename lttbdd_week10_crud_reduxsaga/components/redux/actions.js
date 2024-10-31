// actions.js
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE';

export const fetchCoursesRequest = () => ({ type: FETCH_COURSES_REQUEST });
export const fetchCoursesSuccess = (data) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: data,
});
export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

export const deleteCourseRequest = (id) => ({
  type: DELETE_COURSE_REQUEST,
  payload: id,
});

export const deleteCourseSuccess = (id) => ({
  type: DELETE_COURSE_SUCCESS,
  payload: id,
});

export const deleteCourseFailure = (error) => ({
  type: DELETE_COURSE_FAILURE,
  payload: error,
});